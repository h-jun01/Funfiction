import * as React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import HeaderSearchModal from "./HeaderSearchModal";
import TemporaryDrawer from "./TemporaryDrawer";
import { IKeys } from "./Search";
import { NavLink } from "react-router-dom";

interface HeaderIProps {
  backButton: boolean;
  headerBar: boolean;
  headerTitle: string;
  modal: boolean;
  modalBox: boolean;
  modalText: boolean;
  searchResultPosts: IKeys[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  back: () => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const Header: React.FC<HeaderIProps> = ({ ...props }) => {
  return (
    <React.Fragment>
      {props.headerBar && (
        <header className="header">
          <nav className="back">
            {props.backButton && (
              <ArrowBackIosRoundedIcon onClick={props.back} />
            )}
          </nav>
          <h1>{props.headerTitle}</h1>
          <nav className="header_search">
            <NavLink to="/Search" activeClassName="active">
              <SearchRoundedIcon />
            </NavLink>
          </nav>
        </header>
      )}

      <header className="pc_header">
        <div className="pc_header_items">
          <TemporaryDrawer />
          <h1>Funfiction</h1>
          <div className="pc_search">
            <input
              type="text"
              placeholder="&#xf002; 作品名・作者名で検索"
              onChange={props.onSearch}
              onClick={() => {
                props.setModal(true);
              }}
            />
          </div>
        </div>
      </header>

      <HeaderSearchModal
        modal={props.modal}
        modalBox={props.modalBox}
        modalText={props.modalText}
        setModal={props.setModal}
        searchResultPosts={props.searchResultPosts}
      />
    </React.Fragment>
  );
};

export default Header;
