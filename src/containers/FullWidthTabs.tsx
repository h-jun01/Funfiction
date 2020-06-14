import React from "react";
import { db, datetime } from "../firebase/firebase";
import { connect } from "react-redux";
import { setCommentView } from "../actions/bookExplanation";
import * as firebase from "firebase/app";
import FullWidthTabs, { UserKeys } from "../components/FullWidthTabs";
import { Action, Dispatch } from "redux";
import { UnionedAction, allState } from "../actions/index";

interface ContainerFullWidthTabs {
  uid: string;
  bookDetailsComicID: number;
  setCommentView: (comment: string) => UnionedAction;
  commentView: Array<UserKeys>;
}

const ContainerFullWidthTabs: React.FC<ContainerFullWidthTabs> = ({
  uid,
  bookDetailsComicID,
  setCommentView,
  commentView,
}) => {
  console.log(commentView);

  React.useEffect(() => {
    const getFireData = async () => {
      const querySnapshot = await db
        .collection("books")
        .where("id", "==", bookDetailsComicID)
        .get();
      querySnapshot.forEach((doc) => {
        setCommentView(doc.data().comment);
      });
    };
    getFireData();
  }, [bookDetailsComicID, setCommentView]);

  //コメント内容の取得
  const [commentContent, setCommentContent] = React.useState("");
  const getComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  //コメント処理
  const commentAdd = async () => {
    await db
      .collection("users")
      .where("uid", "==", uid)
      .orderBy("ID")
      .get()
      .then(async (d) => {
        const commentUserName: string = await d.docs[0].data().Name;
        const commentUserPhoto: string = await d.docs[0].data().src;
        await db
          .collection("books")
          .where("id", "==", bookDetailsComicID)
          .get()
          .then(async (c) => {
            await db
              .collection("books")
              .doc(c.docs[0].id)
              .update({
                comment: firebase.firestore.FieldValue.arrayUnion({
                  date: datetime(),
                  userName: commentUserName,
                  src: commentUserPhoto,
                  comment: commentContent,
                }),
              });
            await db
              .collection("books")
              .where("id", "==", bookDetailsComicID)
              .get()
              .then(async (d) => {
                await setCommentView(d.docs[0].data().comment);
              });
          })
          .catch((err) => {
            console.log(err);
          });
        setCommentContent("");
      });
  };

  return (
    <FullWidthTabs
      getComment={getComment}
      commentAdd={commentAdd}
      commentView={commentView}
    />
  );
};

const mapStateToProps = (state: allState) => {
  return {
    uid: state.myPageReducer.uid,
    commentView: state.bookExplanationReducer.commentView,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setCommentView: (comment: string) => dispatch(setCommentView(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerFullWidthTabs);
