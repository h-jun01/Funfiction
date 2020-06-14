import * as React from "react";
import FullWidthTabs from "../containers/FullWidthTabs";
// import Star from "../containers/Star";

interface BookListProps {
  src: string;
  title: string;
  creator: string;
  comic_background: React.RefObject<HTMLInputElement>;
  favButton: string;
  bookDetailsComicID: number;
  point: number;
  favoriteStatusChange: () => void;
  support: () => void;
  pointSelection: (number: number) => void;
  choicePoint: number;
  favStatus: boolean;
  isDoneModal: boolean;
}

const BookExplanationList: React.FC<BookListProps> = ({ ...props }) => {
  const [Modal, setModal] = React.useState(false);
  // const [isDoneModal, setisDoneModal] = React.useState(false);
  const [item1, setItem1] = React.useState(false);
  const [item2, setItem2] = React.useState(false);
  const [item3, setItem3] = React.useState(false);
  const [item4, setItem4] = React.useState(false);
  const [item5, setItem5] = React.useState(false);
  const [item6, setItem6] = React.useState(false);
  const [item7, setItem7] = React.useState(false);
  const [item8, setItem8] = React.useState(false);
  const [item9, setItem9] = React.useState(false);

  const isModalOpen = () => {
    setModal(true);
  };

  const isModalclose = () => {
    setModal(false);
  };

  // const isDoneModalOpen = () => {
  //   setisDoneModal(true);
  // };

  const isDoneModalClose = () => {
    setModal(false);
  };

  const doubleFunction = () => {
    props.support();
    setItem1(false);
    setItem2(false);
    setItem3(false);
    setItem4(false);
    setItem5(false);
    setItem6(false);
    setItem7(false);
    setItem8(false);
    setItem9(false);
    // props.setChoicePoint(0);
  };

  const itemClick1 = () => {
    if (item1 === false) {
      setItem1(true);
      props.pointSelection(100);
    } else {
      setItem1(false);
      props.pointSelection(-100);
    }
  };
  const itemClick2 = () => {
    if (item2 === false) {
      setItem2(true);
      props.pointSelection(300);
    } else {
      setItem2(false);
      props.pointSelection(-300);
    }
  };
  const itemClick3 = () => {
    if (item3 === false) {
      setItem3(true);
      props.pointSelection(500);
    } else {
      setItem3(false);
      props.pointSelection(-500);
    }
  };
  const itemClick4 = () => {
    if (item4 === false) {
      setItem4(true);
      props.pointSelection(1000);
    } else {
      setItem4(false);
      props.pointSelection(-1000);
    }
  };
  const itemClick5 = () => {
    if (item5 === false) {
      setItem5(true);
      props.pointSelection(1500);
    } else {
      setItem5(false);
      props.pointSelection(-1500);
    }
  };
  const itemClick6 = () => {
    if (item6 === false) {
      setItem6(true);
      props.pointSelection(3000);
    } else {
      setItem6(false);
      props.pointSelection(-3000);
    }
  };
  const itemClick7 = () => {
    if (item7 === false) {
      setItem7(true);
      props.pointSelection(5000);
    } else {
      setItem7(false);
      props.pointSelection(-5000);
    }
  };
  const itemClick8 = () => {
    if (item8 === false) {
      setItem8(true);
      props.pointSelection(7500);
    } else {
      setItem8(false);
      props.pointSelection(-7500);
    }
  };
  const itemClick9 = () => {
    if (item9 === false) {
      setItem9(true);
      props.pointSelection(10000);
    } else {
      setItem9(false);
      props.pointSelection(-10000);
    }
  };

  let doneModal;
  let supportModal;
  let itemClass1 = item1 ? "ba" : "support_items_box";
  let itemClass2 = item2 ? "ba" : "support_items_box";
  let itemClass3 = item3 ? "ba" : "support_items_box";
  let itemClass4 = item4 ? "ba" : "support_items_box";
  let itemClass5 = item5 ? "ba" : "support_items_box";
  let itemClass6 = item6 ? "ba" : "support_items_box";
  let itemClass7 = item7 ? "ba" : "support_items_box";
  let itemClass8 = item8 ? "ba" : "support_items_box";
  let itemClass9 = item9 ? "ba" : "support_items_box";
  if (Modal) {
    supportModal = (
      <div className="support_modal">
        <div className=" support_header">
          <img
            src="/icons/batsu01.svg"
            alt="close"
            className="support_close"
            onClick={isModalclose}
          />
          <div className="support_mypoint">
            <img src="/icons/coin.png" alt="coin" />
            <p>{props.point}</p>
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="support_user">
          <img src="/icons/userIcon01.png" alt="user" />
          <p>No Copy Right Girl</p>
        </div>
        <div className="support_comment">
          <input type="text" placeholder="素敵なコメントを添えて応援しよう" />
        </div>
        <div className="support_box">
          <div className="support_point_choice">
            <div
              className={itemClass1}
              onClick={() => {
                itemClick1();
              }}
            >
              <img
                src="/icons/ramen.png"
                alt="ramen"
                className="support_items"
              />
              <p>ラーメン</p>
              <div className="items_point_box">
                <img src="/icons/coin.png" alt="coin" />
                <p>100</p>
              </div>
            </div>
            <div
              className={itemClass2}
              onClick={() => {
                itemClick2();
              }}
            >
              <img
                src="/icons/ramen.png"
                alt="ramen"
                className="support_items"
              />
              <p className="support_eat">出前ラーメン</p>
              <div className="items_point_box">
                <img src="/icons/coin.png" alt="coin" />
                <p>300</p>
              </div>
            </div>
            <div
              className={itemClass3}
              onClick={() => {
                itemClick3();
              }}
            >
              <img
                src="/icons/ramen.png"
                alt="ramen"
                className="support_items"
              />
              <p className="support_eat">ラーメン・極</p>
              <div className="items_point_box">
                <img src="/icons/coin.png" alt="coin" />
                <p>500</p>
              </div>
            </div>
          </div>

          <div className="support_point_choice">
            <div
              className={itemClass4}
              onClick={() => {
                itemClick4();
              }}
            >
              <img
                src="/icons/sushi.png"
                alt="ramen"
                className="support_items"
              />
              <p className="support_eat">寿司</p>
              <div className="items_point_box">
                <img src="/icons/coin.png" alt="coin" />
                <p>1000</p>
              </div>
            </div>
            <div
              className={itemClass5}
              onClick={() => {
                itemClick5();
              }}
            >
              <img
                src="/icons/sushi.png"
                alt="ramen"
                className="support_items"
              />
              <p className="support_eat">回転寿司</p>
              <div className="items_point_box">
                <img src="/icons/coin.png" alt="coin" />
                <p>1500</p>
              </div>
            </div>
            <div
              className={itemClass6}
              onClick={() => {
                itemClick6();
              }}
            >
              <img
                src="/icons/sushi.png"
                alt="ramen"
                className="support_items"
              />
              <p className="support_eat">回らない寿司</p>
              <div className="items_point_box">
                <img src="/icons/coin.png" alt="coin" />
                <p>3000</p>
              </div>
            </div>
          </div>

          <div className="size">
            <div className="support_point_choice">
              <div
                className={itemClass7}
                onClick={() => {
                  itemClick7();
                }}
              >
                <img
                  src="/icons/yakiniku.png"
                  alt="ramen"
                  className="support_items"
                />
                <p className="support_eat">焼肉</p>
                <div className="items_point_box">
                  <img src="/icons/coin.png" alt="coin" />
                  <p>5000</p>
                </div>
              </div>
              <div
                className={itemClass8}
                onClick={() => {
                  itemClick8();
                }}
              >
                <img
                  src="/icons/yakiniku.png"
                  alt="ramen"
                  className="support_items"
                />
                <p className="support_eat">中級焼肉</p>
                <div className="items_point_box">
                  <img src="/icons/coin.png" alt="coin" />
                  <p>7500</p>
                </div>
              </div>
              <div
                className={itemClass9}
                onClick={() => {
                  itemClick9();
                }}
              >
                <img
                  src="/icons/yakiniku.png"
                  alt="ramen"
                  className="support_items"
                />
                <p className="support_eat">高級焼肉</p>
                <div className="items_point_box">
                  <img src="/icons/coin.png" alt="coin" />
                  <p>10000</p>
                </div>
              </div>
            </div>
          </div>

          {/* <form> */}

          <button
            className="support_submit button"
            onClick={doubleFunction}
            disabled={!props.choicePoint}
          >
            <div className="kaiten"></div>
            <span className="dekoi" id="check">
              ✔︎
            </span>
            <div className="support_submit_wrap" id="kesu">
              <p className="support_char">応援する！</p>
              <div className="support_char_point_box">
                <img src="/icons/coin.png" alt="coin" />
                <p className="support_char_point">{props.choicePoint}</p>
              </div>
            </div>
          </button>
          {/* </form> */}
        </div>
      </div>
    );
    if (props.isDoneModal) {
      doneModal = (
        <div className="done_modal_wrap">
          {/* <Star /> */}
          <img
            src="/icons/batsu02.svg"
            alt="close"
            className="done_modal_close"
            onClick={isDoneModalClose}
          />
          <div className="done_modal">
            <div className="done_support_user">
              <img src="/icons/userIcon01.png" alt="icon" />
              <p className="done_support_user_name">
                No Copy Right Girl<span className="honorific">さん</span>
              </p>
              <div className="done_user_message">
                <p>応援ありがとうございます！</p>
                <p>これからもよろしくね！</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  let fevClass = props.favStatus ? "details_favorite_true" : "details_favorite";
  return (
    <div className="details_wrap">
      <div className="details_top" ref={props.comic_background}>
        <img src={props.src} alt="presentation" height="160" />
        <div className="details_info">
          <p className="details_title">{props.title}</p>
          <p className="details_creator">{props.creator}</p>
          {/* <p className="detalis_fev_number">
            <i className="fas fa-star"></i>5
          </p> */}
          <div className="details_button_box">
            <div className={fevClass} onClick={props.favoriteStatusChange}>
              <i className="far fa-star"></i>
              {props.favButton}
            </div>
            <div className="details_support" onClick={isModalOpen}>
              <i className="far fa-thumbs-up"></i>
              応援する
            </div>
          </div>
        </div>
      </div>
      <FullWidthTabs bookDetailsComicID={props.bookDetailsComicID} />
      {supportModal}
      {doneModal}
    </div>
  );
};

export default BookExplanationList;
