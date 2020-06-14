import * as React from "react";
import MyPage from "../components/MyPage";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { clearState } from "../actions/navigation";
import { titleChange } from "../actions/navigation";
import { UnionedAction, allState } from "../actions/index";

interface ContainerMyPage {
  userName: string;
  point: number;
  clearState: () => UnionedAction;
  titleChange: (title: string) => UnionedAction;
}

const ContainerMyPage: React.FC<ContainerMyPage> = ({
  userName,
  point,
  clearState,
  titleChange
}) => {
  React.useEffect(() => {
    clearState();
  }, [clearState]);

  React.useEffect(() => {
    titleChange("マイページ");
  }, [titleChange]);

  return <MyPage userName={userName} point={point} />;
};

const mapStateToProps = (state: allState) => {
  return {
    userName: state.myPageReducer.userName,
    point: state.myPageReducer.point
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  clearState: () => dispatch(clearState()),
  titleChange: (title: string) => dispatch(titleChange(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerMyPage);
