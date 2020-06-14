import { actionTypes, UnionedAction } from "../actions/index";
import { Reducer } from "react";

const initialstate = {
  open: false,
  emailInput: "",
  passwdInput: "",
  nameInput: ""
};

interface authInterface {
  open: boolean;
  emailInput: string;
  passwdInput: string;
  nameInput: string;
}

export const authReducer: Reducer<authInterface, UnionedAction> = (
  state = initialstate,
  action
) => {
  switch (action.type) {
    case actionTypes.USER_HANDLE_CHANGE:
      return {
        ...state,
        open: action.payload.open
      };
    case actionTypes.USER_EMAIL_VALUE:
      return {
        ...state,
        emailInput: action.payload.emailInput
      };
    case actionTypes.USER_PASSWD_VALUE:
      return {
        ...state,
        passwdInput: action.payload.passwdInput
      };
    default:
      return state;
  }
};
