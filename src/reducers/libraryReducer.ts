import { actionTypes, UnionedAction } from "../actions/index";

const initialstate = {
  favoriteArray: []
};

export const libraryReducer = (state = initialstate, action: UnionedAction) => {
  switch (action.type) {
    case actionTypes.SYSTEM_FAVORITE_STATUS:
      return {
        ...state,
        favoriteArray: action.payload.favoriteArray
      };
    default:
      return state;
  }
};
