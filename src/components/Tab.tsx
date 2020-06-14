import * as React from "react";
import Checkout from "../components/Checkout";

class Tab extends React.Component {
  public render() {
    return (
      <div className="tabs">
        <input id="all" type="radio" name="tab_item" defaultChecked />
        <label className="tab_item" htmlFor="all">
          作品詳細
        </label>
        <input id="programming" type="radio" name="tab_item" />
        <label className="tab_item" htmlFor="programming">
          コメント一覧
        </label>
        <input id="design" type="radio" name="tab_item" />
        <div className="tab_content" id="all_content">
          <p>aaaaaaaaaaa</p>
        </div>
        <div className="tab_content" id="programming_content">
          コメント一覧の内容
        </div>
        <div className="readnav">
          <p>今すぐ読む！</p>
        </div>
        <div className="favnav">{/* <Checkout /> */}</div>
      </div>
    );
  }
}

export default Tab;
