import * as React from "react";
import { db, datetime } from "../firebase/firebase";
import { connect } from "react-redux";
import { BookData } from "../components/config/BookData";
import * as firebase from "firebase/app";

interface ContainerSupportIProps {
  uid: string;
}

//応援する
const ContainerSupport: React.FC<ContainerSupportIProps> = ({ uid }) => {
  const support = () => {
    db.collection("users")
      .where("uid", "==", uid)
      .orderBy("ID")
      .get()
      .then(async (user) => {
        const userName = await user.docs[0].data().Name;
        const userPoint: number = await user.docs[0].data().Point;
        const usePoint: number = await user.docs[0].data().usePoint;
        const nowData = datetime();
        const userDocumentID = user.docs[0].id;

        db.collection("users")
          .where("uid", "==", BookData.AllComics.comics[0].creatorid)
          .orderBy("ID")
          .get()
          .then((creator) => {
            const creatorName = creator.docs[0].data().Name;
            const creatorPoint: number = creator.docs[0].data().Point;
            const acceptancePoint: number = creator.docs[0].data()
              .acceptancePoint;
            const creatorDocumentID = creator.docs[0].id;

            //100は使う予定のポイント
            if (userPoint < 100) {
              console.log("ポイント足りない");
            } else {
              db.collection("users")
                .doc(userDocumentID)
                .update({
                  Point: userPoint - 100,
                  usePoint: usePoint + 100,
                  updateTime: nowData,
                  presentHistory: firebase.firestore.FieldValue.arrayUnion({
                    date: nowData,
                    userName: creatorName,
                    FORorTO: "FOR",
                    Point: 100,
                  }),
                });

              db.collection("users")
                .doc(creatorDocumentID)
                .update({
                  Point: creatorPoint + 100,
                  acceptancePoint: acceptancePoint + 100,
                  updateTime: nowData,
                  presentHistory: firebase.firestore.FieldValue.arrayUnion({
                    date: nowData,
                    userName: userName,
                    FORorTO: "TO",
                    Point: 100,
                  }),
                });

              db.collection("Support").add({
                date: nowData,
                point: 100,
                forUser: userName,
                toUser: creatorName,
              });
            }
          });
      });
  };
  return (
    <div>
      <h1>aaa</h1>
      <button onClick={support}>応援する</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.myPageReducer.uid,
  };
};

export default connect(mapStateToProps)(ContainerSupport);
