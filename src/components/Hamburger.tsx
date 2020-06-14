import * as React from "react";

const Hamburger: React.FC = () => {
  const onbtn = (): void => {
    if (document.getElementById("4")!.className === "l-nav js-nav") {
      document.getElementById("4")!.classList.add("is-open");
    } else {
      document.getElementById("4")!.classList.remove("is-open");
    }

    if (document.getElementById("5")!.className === "p-menu js-nav__btn") {
      document.getElementById("5")!.classList.add("is-open");
    } else {
      document.getElementById("5")!.classList.remove("is-open");
    }
  };

  return (
    <div className="l-wrapper">
      <div
        className="l-wrap js-wrap is-load"
        style={{ width: "100%", height: "auto" }}
        id="1"
      >
        <div className="l-wrap__container" id="2">
          <div className="l-wrap__header js-header" data-layer="1" id="3">
            <div className="p-menu js-nav__btn" id="5">
              <div className="p-menu__inner">
                <img
                  src="/header-images/btn_menu.png"
                  alt="OPEN"
                  className="p-menu__open"
                />
                <img
                  src="/header-images/btn_close.png"
                  alt="CLOSE"
                  className="p-menu__close"
                  onClick={onbtn}
                />
              </div>
            </div>

            <nav className="l-nav js-nav" id="4">
              <div className="l-nav__bg js-nav__close"></div>
              <div className="l-nav__container">
                <div className="l-nav__layer"></div>
                <ul className="p-nav">
                  <li className="p-nav__item u-glitch-hov">
                    <p>ログインまたは登録</p>
                  </li>
                  <li className="p-nav__item u-glitch-hov">
                    <p>コミュニティガイドライン</p>
                  </li>
                  <li className="p-nav__item u-glitch-hov">
                    <p>プライバシーポリシー</p>
                  </li>
                  <li className="p-nav__item u-glitch-hov">
                    <p>利用規約</p>
                  </li>
                  <li className="p-nav__item u-glitch-hov">
                    <p>よくある質問</p>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
