import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";

interface AuthIProps {
  handleOpen: () => void;
  handleClose: () => void;
  registeOpen: () => void;
  login: () => void;
  twitterCreate: () => void;
  EmailHandleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  PasswdHandleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mailMessage: string;
  passMessage: string;
  open: boolean;
  disabled: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "3px",
      boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.12)",
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const Auth: React.FC<AuthIProps> = ({ ...props }) => {
  const classes: Record<"modal" | "paper", string> = useStyles({});
  return (
    <React.Fragment>
      <div onClick={props.handleOpen}>
        <div>
          <i className="fas fa-sign-in-alt"></i>
        </div>
        <p>ログイン</p>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2
              className="transition-modal-title"
              style={{ marginBottom: "20px" }}
            >
              ログイン
            </h2>
            <form className="auth_form">
              <input
                type="text"
                name="email"
                placeholder="メールアドレス"
                onChange={(e) => props.EmailHandleOnChange(e)}
              />
              <p className="error_message">{props.mailMessage}</p>
              <br />
              <input
                type="password"
                name="passwd"
                placeholder="パスワード"
                onChange={(e) => props.PasswdHandleOnChange(e)}
                // ref={passwdRef}
              />
              <p className="error_message">{props.passMessage}</p>
              <br />
            </form>
            <button
              onClick={props.login}
              className="new-button"
              disabled={props.disabled}
            >
              <div className="new-kaiten"></div>
              <span className=" new-dekoi" id="new-check">
                ✔
              </span>
              <div className="support_submit_wrap" id="kesu2">
                ログイン
              </div>
            </button>
            <div className="auth_text_box">
              <p className="passwd_forget">
                パスワードを忘れた場合は<span>こちら</span>
              </p>
              <p className="another_login">または</p>
            </div>
            <button
              className="auth_twitter_button"
              onClick={props.twitterCreate}
            >
              <i className="fab fa-twitter"></i>
              <p>Twitterでログイン</p>
            </button>
            <p className="not_have">
              アカウントをお持ちでないですか？&nbsp;
              <span
                onClick={() => {
                  props.handleClose();
                  props.registeOpen();
                }}
              >
                新規登録
              </span>
            </p>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};

export default Auth;
