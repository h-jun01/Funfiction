import React, { useState, useEffect } from "react";
import twitter from "../images/icon/twitter.png";
import line from "../images/icon/line.png";
import insta from "../images/icon/insta.png";
import facebook from "../images/icon/facebook.png";
import hatena from "../images/icon/hatena.png";
import poket from "../images/icon/poket.png";
import linkedin from "../images/icon/linkedin.png";

const Share: React.FC = () => {
  const [Modal, setModal] = useState(false);

  useEffect(() => {
    const pictures: string[] = [
      twitter,
      line,
      insta,
      facebook,
      hatena,
      poket,
      linkedin
    ];
    pictures.forEach((picture: string) => {
      const img = new Image();
      img.src = picture;
    });
  }, []);

  const isModalOpen = () => {
    document.body.setAttribute("style", "overflow: hidden");
    setModal(true);
  };

  const isModalclose = () => {
    document.body.getAttribute("style");
    document.body.removeAttribute("style");
    setModal(false);
  };

  const shareTwitter =
    "https://twitter.com/intent/tweet?text=シェアメッセージ%0ahttps://hal-fansa.web.app/%0a付与するアカウント名";
  const shareFaceBook =
    "http://www.facebook.com/share.php?u=https://hal-fansa.web.app/";
  const shareLINE =
    "http://line.me/R/msg/text/?シェアメッセージ https://hal-fansa.web.app/";
  const shareHatena =
    "https://b.hatena.ne.jp/add?mode=confirm&url=https://hal-fansa.web.app/&title=FANSA";
  const sharePocket =
    "https://getpocket.com/edit?url=https://hal-fansa.web.app/";
  const shareLinkedin =
    "http://www.linkedin.com/shareArticle?mini=true&url=https://hal-fansa.web.app/";
  const shareInstagram = "https://www.instagram.com/";

  let shareModal;
  if (Modal) {
    shareModal = (
      <div className="sns-area">
        <p style={{ fontWeight: "bold" }}>シェア</p>
        <ul className="sns-group">
          <li className="sns-item1">
            <a href={shareTwitter} rel="noopener noreferrer" target="_blank">
              <img src={twitter} alt="twitter" />
              <p>Twitter</p>
            </a>
          </li>
          <li className="sns-item2">
            <a href={shareLINE} rel="noopener noreferrer" target="_blank">
              <img src={line} alt="twitter" />
              <p>LINE</p>
            </a>
          </li>
          <li className="sns-item3">
            <a href={shareInstagram} rel="noopener noreferrer" target="_blank">
              <img src={insta} alt="twitter" />
              <p>Instagram</p>
            </a>
          </li>
          <li className="sns-item4">
            <a href={shareFaceBook} rel="noopener noreferrer" target="_blank">
              <img src={facebook} alt="twitter" />
              <p>Facebook</p>
            </a>
          </li>
          <li className="sns-item5">
            <a href={shareHatena} rel="noopener noreferrer" target="_blank">
              <img src={hatena} alt="twitter" />
              <p>はてな</p>
            </a>
          </li>
          <li className="sns-item6">
            <a href={sharePocket} rel="noopener noreferrer" target="_blank">
              <img src={poket} alt="twitter" />
              <p>pocket</p>
            </a>
          </li>
          <li className="sns-item7">
            <a href={shareLinkedin} rel="noopener noreferrer" target="_blank">
              <img src={linkedin} alt="twitter" />
              <p>LINKEDIN</p>
            </a>
          </li>
        </ul>

        <div className="shareCansell" onClick={isModalclose}>
          <p>キャンセル</p>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="share_btn" onClick={isModalOpen}>
        <p>このアプリをシェア</p>
        <i className="fas fa-chevron-right"></i>
      </div>
      {shareModal}
    </React.Fragment>
  );
};

export default Share;
