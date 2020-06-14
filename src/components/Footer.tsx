import * as React from "react";
import Button from "@material-ui/core/Button";
import Question from "../components/Question";
import Share from "../components/Share";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="Footer_wrap">
        {/* <div className="Footer_border">FANSA</div>
        <div style={{ padding: "20px 0" }}>
          <Share />
          <Question />
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className="Footer_btn"
            style={{
              backgroundColor: "#00acee",
              color: "#fff",
              margin: "10px 0"
            }}
          >
            公式ツイッター
          </Button>
        </div> */}
        <p className="copyright">Copyright FANSA all right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
