import * as React from "react";
import { db } from "../firebase/firebase";
import { connect } from "react-redux";

interface ContaonerPurchasehistoryIProps {
  uid: string;
}

//ポイントかった履歴
const ContaonerPurchasehistory: React.FC<ContaonerPurchasehistoryIProps> = ({
  uid,
}) => {
  db.collection("settlementHistory")
    .where("uid", "==", uid)
    .orderBy("ID")
    .get()
    .then(async (d) => {
      let Amount: number[] = [];
      let Point: number[] = [];
      let Settlement: string[] = [];
      for (let i = 0; i < d.size; i++) {
        //日本円
        Amount.push(d.docs[i].data().Amount);
        //ポイント
        Point.push(d.docs[i].data().Point);
        //日付
        Settlement.push(d.docs[i].data().Settlement);
        console.log(Amount);
        console.log(Point);
        console.log(Settlement);
      }
    });
  return (
    <div>
      <h1>かったりれき</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.myPageReducer.uid,
  };
};

export default connect(mapStateToProps)(ContaonerPurchasehistory);
