import * as React from "react";
import BookExplanationList from "../components/BookExplanationList";
import * as firebase from "firebase/app";
import { RouteComponentProps, withRouter } from "react-router";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { layoutChange } from "../actions/navigation";
import { db, datetime } from "../firebase/firebase";
import { setFavoriteItem } from "../actions/library";
import { setPoint } from "../actions/myPage";
import { setFavButton, setFavStatus } from "../actions/bookExplanation";
import { IKeys } from "../components/Home";
import { UnionedAction, allState } from "../actions/index";

type BooksProps = {
  layoutChange: () => UnionedAction;
  setFavoriteItem: (av: number[]) => UnionedAction;
  uid: string;
  setPoint: (num: number) => UnionedAction;
  point: number;
  setFavButton: (char: string) => UnionedAction;
  setFavStatus: (boolean: boolean) => UnionedAction;
  favStatus: boolean;
  favButton: string;
  bookData: IKeys;
} & RouteComponentProps<{
  code: string;
  details: any;
}>;

const Books: React.FC<BooksProps> = ({
  match,
  layoutChange,
  uid,
  setFavoriteItem,
  setPoint,
  point,
  setFavButton,
  setFavStatus,
  favStatus,
  favButton,
  bookData,
}) => {
  const targetID: number = match.params.details;
  const bookDetails: IKeys = bookData[targetID - 1];
  const bookDetailsBackGround: string = bookData[targetID - 1].src;
  const bookDetailsComicID: number = bookData[targetID - 1].id;
  const comic_background: React.RefObject<HTMLInputElement> = React.createRef<
    HTMLInputElement
  >();
  React.useEffect(() => {
    layoutChange();
  }, [layoutChange]);

  React.useEffect(() => {
    comic_background.current!.style.background = `url(${bookDetailsBackGround}) center / cover`;
  });

  React.useEffect(() => {
    db.collection("users")
      .where("uid", "==", uid)
      .orderBy("ID")
      .get()
      .then((d) => {
        console.log(d.docs[0].data());
        if (d.docs[0].data().favorite.indexOf(bookDetailsComicID) !== -1) {
          //お気に入り済ならの処理
          setFavButton("お気に入り済み");
          setFavStatus(true);
        } else {
          //お気に入りされてない場合
          setFavButton("お気に入り登録");
          setFavStatus(false);
        }
      });
  }, [bookDetailsComicID, uid, setFavButton, setFavStatus]);

  const favoriteStatusChange = async () => {
    const querySnapshot = await db
      .collection("users")
      .where("uid", "==", uid)
      .orderBy("ID")
      .get();

    if (
      querySnapshot.docs[0].data().favorite.indexOf(bookDetailsComicID) !== -1
    ) {
      setFavButton("お気に入り登録");
      setFavStatus(false);

      //お気に入り済ならの処理
      await db
        .collection("users")
        .doc(querySnapshot.docs[0].id)
        .update({
          favorite: firebase.firestore.FieldValue.arrayRemove(
            bookDetailsComicID
          ),
        });

      //お気に入り更新
      await db
        .collection("users")
        .where("uid", "==", uid)
        .orderBy("ID")
        .get()
        .then(async (d) => {
          let favoriteArray: number[] = [];
          for (let i = 0; i < d.docs[0].data().favorite.length; i++) {
            favoriteArray.push(bookData[d.docs[0].data().favorite[i] - 1]);
          }
          await setFavoriteItem(favoriteArray);
          console.log(favoriteArray);
        });

      //お気に入り数低下
      await db
        .collection("books")
        .where("id", "==", bookDetailsComicID)
        .get()
        .then((d) => {
          const favoriteID = d.docs[0].id;
          const favoriteNumber: number = d.docs[0].data().favorite;
          db.collection("books")
            .doc(favoriteID)
            .update({
              favorite: favoriteNumber - 1,
            });
        });
    } else {
      setFavButton("お気に入り済み");
      setFavStatus(true);

      //お気に入りされてない場合(お気に入り追加する処理)
      await db
        .collection("users")
        .doc(querySnapshot.docs[0].id)
        .update({
          favorite: firebase.firestore.FieldValue.arrayUnion(
            bookDetailsComicID
          ),
        });

      //お気に入り更新
      await db
        .collection("users")
        .where("uid", "==", uid)
        .orderBy("ID")
        .get()
        .then(async (d) => {
          let favoriteArray: number[] = [];
          for (let i = 0; i < d.docs[0].data().favorite.length; i++) {
            favoriteArray.push(bookData[d.docs[0].data().favorite[i] - 1]);
          }
          await setFavoriteItem(favoriteArray);
          console.log(favoriteArray);
        });

      //お気に入り数追加
      await db
        .collection("books")
        .where("id", "==", bookDetailsComicID)
        .get()
        .then((d) => {
          const favoriteID = d.docs[0].id;
          const favoriteNumber: number = d.docs[0].data().favorite;
          db.collection("books")
            .doc(favoriteID)
            .update({
              favorite: favoriteNumber + 1,
            });
        });
    }
  };

  const [choicePoint, setChoicePoint] = React.useState(0);
  const [isDoneModal, setisDoneModal] = React.useState(false);
  const pointSelection = (num) => {
    setChoicePoint(choicePoint + num);
  };
  const isDoneModalOpen = () => {
    setisDoneModal(true);
  };
  //応援押したとき
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
          .where("uid", "==", bookData[0].creatorid)
          .orderBy("ID")
          .get()
          .then(async (d) => {
            const creatorName = d.docs[0].data().Name;
            const creatorPoint: number = d.docs[0].data().Point;
            const acceptancePoint: number = d.docs[0].data().acceptancePoint;
            const creatorDocumentID = d.docs[0].id;

            //100は使う予定のポイント
            if (userPoint < choicePoint) {
              console.log("ポイント足りない");
            } else {
              if (
                document
                  .getElementsByClassName("button")[0]
                  .classList.contains("loading")
              ) {
                document
                  .getElementsByClassName("button")[0]
                  .classList.remove("loading");
                document
                  .getElementsByClassName("kaiten")[0]
                  .classList.remove("spinner");
                document
                  .getElementsByClassName("dekoi")[0]
                  .classList.remove("check");
                document.getElementById("check")!.style.display = "none";
                document.getElementById("kesu")!.style.display = "inline";
              } else {
                document
                  .getElementsByClassName("button")[0]
                  .classList.add("loading");
                document
                  .getElementsByClassName("kaiten")[0]
                  .classList.add("spinner");
                document
                  .getElementsByClassName("dekoi")[0]
                  .classList.add("check");
                document.getElementById("check")!.style.display = "inline";
                document.getElementById("kesu")!.style.display = "none";
              }

              await db
                .collection("users")
                .doc(userDocumentID)
                .update({
                  Point: userPoint - choicePoint,
                  usePoint: usePoint + choicePoint,
                  updateTime: nowData,
                  presentHistory: firebase.firestore.FieldValue.arrayUnion({
                    date: nowData,
                    userName: creatorName,
                    FORorTO: "FOR",
                    Point: choicePoint,
                  }),
                });

              await db
                .collection("users")
                .doc(creatorDocumentID)
                .update({
                  Point: creatorPoint + choicePoint,
                  acceptancePoint: acceptancePoint + choicePoint,
                  updateTime: nowData,
                  presentHistory: firebase.firestore.FieldValue.arrayUnion({
                    date: nowData,
                    userName: userName,
                    FORorTO: "TO",
                    Point: choicePoint,
                  }),
                });

              await db.collection("Support").add({
                date: nowData,
                point: choicePoint,
                forUser: userName,
                toUser: creatorName,
              });
              await setPoint(point - choicePoint);
              setTimeout(isDoneModalOpen, 2000);
            }
          });
      });
  };

  return (
    <React.Fragment>
      <BookExplanationList
        src={bookDetails.src}
        title={bookDetails.title}
        creator={bookDetails.creator}
        comic_background={comic_background}
        favoriteStatusChange={favoriteStatusChange}
        favButton={favButton}
        bookDetailsComicID={bookDetailsComicID}
        support={support}
        point={point}
        pointSelection={pointSelection}
        choicePoint={choicePoint}
        favStatus={favStatus}
        isDoneModal={isDoneModal}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: allState) => {
  return {
    uid: state.myPageReducer.uid,
    point: state.myPageReducer.point,
    favButton: state.bookExplanationReducer.favButton,
    favStatus: state.bookExplanationReducer.favStatus,
    bookData: state.bookExplanationReducer.bookData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  layoutChange: () => dispatch(layoutChange()),
  setFavoriteItem: (fav: number[]) => dispatch(setFavoriteItem(fav)),
  setPoint: (num: number) => dispatch(setPoint(num)),
  setFavButton: (char: string) => dispatch(setFavButton(char)),
  setFavStatus: (boolean: boolean) => dispatch(setFavStatus(boolean)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Books));
