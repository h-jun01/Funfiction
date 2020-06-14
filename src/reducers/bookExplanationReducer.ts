import { actionTypes, UnionedAction } from "../actions/index";

const initialstate = {
  commentView: [],
  bookData: [],
  favButton: "お気に入り登録",
  favStatus: false
};

export const bookExplanationReducer = (
  state = initialstate,
  action: UnionedAction
) => {
  switch (action.type) {
    case actionTypes.SYSTEM_COMMENT_VIEW:
      return {
        ...state,
        commentView: action.payload.commentView
      };
    case actionTypes.USER_FAVORITE_BUTTON:
      return {
        ...state,
        favButton: action.payload.favButton
      };
    case actionTypes.USER_FAVORITE_REGISTE:
      return {
        ...state,
        favStatus: action.payload.favStatus
      };
    case actionTypes.SYSTEM_BOOK_DATA:
      return {
        ...state,
        bookData: action.payload.bookData
      };
    default:
      return state;
  }
};
