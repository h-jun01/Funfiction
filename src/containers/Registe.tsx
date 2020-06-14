import * as React from "react";
import { connect } from "react-redux";
import { auth, datetime, db } from "../firebase/firebase";
import Registe from "../components/Registe";
import { setUserName } from "../actions/myPage";
import { actionHandleChange as authHandleChange } from "../actions/auth";
import {
  actionHandleChange,
  setEmailInput,
  setPasswdInput,
  setNameInput,
  setCreateStatus,
} from "../actions/registe";
import { Action, Dispatch } from "redux";
import { UnionedAction, allState } from "../actions/index";

interface ContainerRegisteIProps {
  open: boolean;
  emailInput: string;
  passwdInput: string;
  nameInput: string;
  createStatus: string;
  setEmailInput: (addess: string) => UnionedAction;
  setPasswdInput: (pass: string) => UnionedAction;
  setNameInput: (name: string) => UnionedAction;
  setUserName: (name: string) => UnionedAction;
  setCreateStatus: (message: string) => UnionedAction;
  actionHandleChange: (modal: boolean) => UnionedAction;
  authHandleChange: (modal: boolean) => UnionedAction;
}

const ContainerRegiste: React.FC<ContainerRegisteIProps> = ({
  actionHandleChange,
  setEmailInput,
  setPasswdInput,
  setNameInput,
  setCreateStatus,
  setUserName,
  authHandleChange,
  ...props
}) => {
  const [mailCheck, setMailCheck] = React.useState<boolean>(false);
  const [nameCheck, setNameCheck] = React.useState<boolean>(false);
  const [passCheck, setPassCheck] = React.useState<boolean>(false);
  const [mailMessage, setMailMessage] = React.useState<string>("");
  const [nameMessage, setNameMessage] = React.useState<string>("");
  const [passMessage, setPassMessage] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const handleOpen = (): void => {
    actionHandleChange(true);
  };
  const handleClose = (): void => {
    actionHandleChange(false);
  };

  const authOpen = (): void => {
    authHandleChange(true);
  };

  const EmailHandleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.currentTarget.value !== "") {
      if (e.currentTarget.value.match(REGEX_EMAIL)) {
        setEmailInput(e.currentTarget.value);
        setMailCheck(true);
        setMailMessage("");
        if (mailCheck && nameCheck && passCheck) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      } else {
        setMailMessage("メールアドレスの形式が不正です");
        setMailCheck(false);
        setDisabled(true);
      }
    } else {
      setMailMessage("メールアドレスを入力してください");
      setMailCheck(false);
      setDisabled(true);
    }
  };

  const NameHandleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value !== "") {
      setNameInput(e.currentTarget.value);
      setNameCheck(true);
      setNameMessage("");
      if (mailCheck && nameCheck && passCheck) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else {
      setNameMessage("ユーザ名を入力してください");
      setNameCheck(false);
      setDisabled(true);
    }
  };

  const PasswdHandleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.currentTarget.value !== "") {
      if (e.currentTarget.value.length >= 6) {
        setPasswdInput(e.currentTarget.value);
        setPassCheck(true);
        setPassMessage("");
        if (mailCheck && nameCheck && passCheck) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      } else {
        setPassMessage("パスワードは6文字以上で入力してください");
        setPassCheck(false);
        setDisabled(true);
      }
    } else {
      setPassMessage("パスワードを入力してください");
      setPassCheck(false);
      setDisabled(true);
    }
  };

  const userCreate = async () => {
    const email = props.emailInput;
    const Name = props.nameInput;
    const passwd = props.passwdInput;
    const nowDate: string = datetime();
    const snap: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = await db
      .collection("users")
      .get();
    const size: number = snap.size;

    if (
      document
        .getElementsByClassName("new-button")[0]
        .classList.contains("new-loading")
    ) {
      document
        .getElementsByClassName("new-button")[0]
        .classList.remove("new-loading");
      document
        .getElementsByClassName("new-kaiten")[0]
        .classList.remove("new-spinner");
      document
        .getElementsByClassName("new-dekoi")[0]
        .classList.remove("new-check");
      document.getElementById("new-check")!.style.display = "none";
      document.getElementById("kesu2")!.style.display = "inline";
    } else {
      document
        .getElementsByClassName("new-button")[0]
        .classList.add("new-loading");
      document
        .getElementsByClassName("new-kaiten")[0]
        .classList.add("new-spinner");
      document
        .getElementsByClassName("new-dekoi")[0]
        .classList.add("new-check");
      document.getElementById("new-check")!.style.display = "inline";
      document.getElementById("kesu2")!.style.display = "none";
    }

    auth
      .createUserWithEmailAndPassword(email, passwd)
      .then((d) => {
        console.log("Success");
        db.collection("users")
          .add({
            ID: size + 1, //ユーザーID
            Name: Name, //ユーザーネーム
            uid: d.user!.uid, //メールアドレス
            src:
              "https://firebasestorage.googleapis.com/v0/b/hew-fansa.appspot.com/o/default_user.png?alt=media&token=3d539089-401d-463b-8fc9-7d5aa7b9f70c",
            Point: 0, //保持ポイント
            usePoint: 0, //応援総額
            acceptancePoint: 0, //受け取り総額
            settlement: 0, //決済総額
            favorite: [],
            createTime: nowDate,
            updateTime: nowDate,
          })
          .then(() => {
            console.log("書き込み成功");
          })
          .catch((err) => {
            console.log(err);
          });
        auth
          .signInWithEmailAndPassword(email, passwd)
          .then(() => {
            console.log("ログイン成功");
            handleClose();
            setMailCheck(false);
            setNameCheck(false);
            setPassCheck(false);
            setDisabled(true);
          })
          .catch((err) => {
            console.log("サインイン失敗!");
            console.log(err);
            setMailCheck(false);
            setNameCheck(false);
            setPassCheck(false);
            setDisabled(true);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Registe
        handleOpen={handleOpen}
        handleClose={handleClose}
        EmailHandleOnChange={EmailHandleOnChange}
        PasswdHandleOnChange={PasswdHandleOnChange}
        NameHandleOnChange={NameHandleOnChange}
        open={props.open}
        userCreate={userCreate}
        createStatus={props.createStatus}
        authOpen={authOpen}
        mailMessage={mailMessage}
        nameMessage={nameMessage}
        passMessage={passMessage}
        disabled={disabled}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: allState) => {
  return {
    open: state.registeReducer.open,
    emailInput: state.registeReducer.emailInput,
    passwdInput: state.registeReducer.passwdInput,
    nameInput: state.registeReducer.nameInput,
    createStatus: state.registeReducer.createStatus,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  authHandleChange: (modal: boolean) => dispatch(authHandleChange(modal)),
  actionHandleChange: (modal: boolean) => dispatch(actionHandleChange(modal)),
  setEmailInput: (aderess: string) => dispatch(setEmailInput(aderess)),
  setNameInput: (name: string) => dispatch(setNameInput(name)),
  setPasswdInput: (pass: string) => dispatch(setPasswdInput(pass)),
  setCreateStatus: (message: string) => dispatch(setCreateStatus(message)),
  setUserName: (name: string) => dispatch(setUserName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerRegiste);
