import { actionTypes, UnionedAction } from "../actions/index";
import { Reducer } from "react";

interface searchIState {
  searchResultPosts: Array<object>;
}

const initialstate: searchIState = {
  searchResultPosts: []
};

export const searchReducer: Reducer<searchIState, UnionedAction> = (
  state = initialstate,
  action: UnionedAction
) => {
  switch (action.type) {
    case actionTypes.USER_SEARCH:
      return {
        ...state,
        searchResultPosts: action.payload.searchResultPosts
      };
    default:
      return state;
  }
};
