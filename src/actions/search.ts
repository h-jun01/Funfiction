import { actionTypes } from "./index";
/***************     Action creator    ***************/
export const setSearchResultPosts = (result: Array<object>) =>
  ({
    type: actionTypes.USER_SEARCH,
    payload: {
      searchResultPosts: result
    }
  } as const);
