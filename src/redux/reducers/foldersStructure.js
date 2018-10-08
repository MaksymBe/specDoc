import {SET_FOLDERS_STRUCTURE} from "../actions/actionTypes";

export const foldersStructure = (state = null, action) => {
  switch (action.type) {

    case SET_FOLDERS_STRUCTURE:
      return action.payload;

    default:
      return state;
  }
};