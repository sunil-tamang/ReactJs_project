import * as actionTypes from '../Actions/actionTypes'

import { updateObject } from "../utility";

const initialState = {

    darkTheme: null
}

const darkTheme = (state, action) => {
  localStorage.setItem("darkTheme", JSON.stringify(action.darkTheme));
  return updateObject(state, { darkTheme: action.darkTheme });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DARK_THEME:
      return darkTheme(state, action);

    default:
      return state;
  }
};

export default reducer;