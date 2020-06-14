import * as React from "react";
import { db } from "../firebase/firebase";
import { connect } from "react-redux";

interface ContainerAcceptanceIProps {
  uid: string;
}

//受け取りボックス
const ContainerAcceptance: React.FC<ContainerAcceptanceIProps> = ({ uid }) => {
  const aaa = () => {
    db.collection("users")
      .where("uid", "==", uid)
      .orderBy("ID")
      .get()
      .then(async (d) => {
        let Acceptance: number[] = [];
        for (let i = 0; i < d.docs[0].data().presentHistory.length; i++) {
          if (d.docs[0].data().presentHistory[i].FORorTO === "TO") {
            Acceptance.push(d.docs[0].data().presentHistory[i]);
          }
          console.log(Acceptance);
        }
        //   d.docs[0].data().
      });
  };
  return (
    <div>
      <h1>かったりれき</h1>
      <button onClick={aaa}>aaa</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.myPageReducer.uid,
  };
};

export default connect(mapStateToProps)(ContainerAcceptance);
