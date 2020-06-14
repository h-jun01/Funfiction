import * as React from "react";
import Auth from "../containers/Auth";
import Registe from "../containers/Registe";
import { NavLink } from "react-router-dom";

interface MyPageIProps {
  userName: string;
  point: number;
}

const MyPage: React.FC<MyPageIProps> = ({ userName, point }) => {
  return (
    <React.Fragment>
      <div className="mypage_height">
        <div className="user_wrap">
          <div className="user_info">
            <i className="fas fa-user"></i>
          </div>
          <div className="user_status">
            <p className="user_name">{userName}</p>
            <div className="user_point_system">
              <p className="user_point">保有ポイント</p>
              <img src="/icons/coin.png" alt="coin" />
              <p className="user_point_view">{point}</p>
            </div>
            <NavLink to="/PointBuy">
              <button className="user_point_buy">ポイント購入</button>
            </NavLink>
          </div>
        </div>

        <div className="user_box">
          <div className="user_information">
            <Registe />
          </div>
          <div className="user_point_history">
            <Auth />
          </div>
          <div className="user_support_box">
            <i className="fas fa-info-circle"></i>
            <p>お知らせ</p>
          </div>
          <div className="user_post">
            <i className="fas fa-history"></i>
            <p>ポイント履歴</p>
          </div>
          <div className="user_contact">
            <i className="fas fa-gift"></i>
            <p>受け取りBOX</p>
          </div>
          <div className="user_bank">
            <i className="fas fa-envelope"></i>
            <p>お問い合わせ</p>
          </div>
          <div className="user_config">
            <i className="fas fa-file-medical"></i>
            <p>投稿申請</p>
          </div>
          <div className="user_auth">
            <i className="far fa-credit-card"></i>
            <p>銀行口座登録</p>
          </div>
          <div className="user_reg">
            <i className="fas fa-cog"></i>
            <p>設定</p>
          </div>
        </div>

        <section className="guideline">
          <NavLink to="/TermsOfService" className="terms_of_service">
            <p>利用規約</p>
            <i className="fas fa-chevron-right"></i>
          </NavLink>
          <NavLink to="/PrivacyPolicy">
            <p>プライバシーポリシー</p>
            <i className="fas fa-chevron-right"></i>
          </NavLink>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MyPage;
