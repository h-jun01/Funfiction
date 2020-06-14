import * as React from "react";
import * as firebase from "firebase/app";
import Auth from "../components/Auth";
import { connect } from "react-redux";
import { auth, db, datetime } from "../firebase/firebase";
// import { setUserName } from "../actions/myPage";
import { actionHandleChange as RegisteHandleChange } from "../actions/registe";
import {
  actionHandleChange,
  setEmailInput,
  setPasswdInput,
} from "../actions/auth";
import { Action, Dispatch } from "redux";
import { UnionedAction, allState } from "../actions/index";

interface ContainerAuthIProps {
  open: boolean;
  emailInput: string;
  passwdInput: string;
  setEmailInput: (addess: string) => UnionedAction;
  setPasswdInput: (pass: string) => UnionedAction;
  // setUserName: (name: string) => UnionedAction;
  actionHandleChange: (modal: boolean) => UnionedAction;
  RegisteHandleChange: (modal: boolean) => UnionedAction;
}

const ContainerAuth: React.FC<ContainerAuthIProps> = ({
  RegisteHandleChange,
  actionHandleChange,
  setEmailInput,
  setPasswdInput,
  // setUserName,
  ...props
}) => {
  const [mailCheck, setMailCheck] = React.useState<boolean>(false);
  const [passCheck, setPassCheck] = React.useState<boolean>(false);
  const [mailMessage, setMailMessage] = React.useState<string>("");
  const [passMessage, setPassMessage] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const handleOpen = (): void => {
    actionHandleChange(true);
  };

  const handleClose = (): void => {
    actionHandleChange(false);
  };

  const registeOpen = (): void => {
    RegisteHandleChange(true);
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
        if (mailCheck && passCheck) {
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

  const PasswdHandleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.currentTarget.value !== "") {
      if (e.currentTarget.value.length >= 6) {
        setPasswdInput(e.currentTarget.value);
        setPassCheck(true);
        setPassMessage("");
        if (mailCheck && passCheck) {
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

  const login = async () => {
    const email = await props.emailInput;
    const passwd = await props.passwdInput;
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
      .signInWithEmailAndPassword(email, passwd)
      .then(() => {
        db.collection("users").where("Email", "==", email).get();
        console.log("ログイン成功");
        handleClose();
      })
      .catch((err) => {
        console.log("サインイン失敗!");
        console.log(err);
      });
  };

  //初期登録用(twitter用)///////////////////////////////////////////////////////////////
  const twitterCreate = async () => {
    const snap = await db.collection("users").get();
    const nowDate = datetime();
    const size = snap.size;
    const provider = new firebase.auth.TwitterAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // const token = result.credential.accessToken;
        // const secret = result.credential.secret;
        const user: any = result.user;
        // console.log(secret);
        // console.log(result.additionalUserInfo.username);
        // console.log(user.photoURL);
        db.collection("users")
          .add({
            ID: size + 1, //ユーザーID
            Name: user.displayName, //ユーザーネーム
            favorite: [], //お気に入り
            uid: user.uid,
            Point: 0, //保持ポイント
            usePoint: 0, //応援総額
            acceptancePoint: 0, //受け取り総額
            settlement: 0, //決済総額
            src: user.photoURL, //アカウント画像(Twitterデフォ)
            createTime: nowDate,
            updateTime: nowDate,
          })
          .then(() => {
            console.log("書き込み成功");
            handleClose();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Auth
        registeOpen={registeOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        EmailHandleOnChange={EmailHandleOnChange}
        PasswdHandleOnChange={PasswdHandleOnChange}
        open={props.open}
        login={login}
        twitterCreate={twitterCreate}
        mailMessage={mailMessage}
        passMessage={passMessage}
        disabled={disabled}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.authReducer.open,
    emailInput: state.authReducer.emailInput,
    passwdInput: state.authReducer.passwdInput,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  RegisteHandleChange: (modal: boolean) => dispatch(RegisteHandleChange(modal)),
  actionHandleChange: (modal: boolean) => dispatch(actionHandleChange(modal)),
  setEmailInput: (aderess: string) => dispatch(setEmailInput(aderess)),
  setPasswdInput: (pass: string) => dispatch(setPasswdInput(pass)),
  // setUserName: (name: string) => dispatch(setUserName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerAuth);
