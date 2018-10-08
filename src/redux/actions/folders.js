import {SET_FOLDERS_STRUCTURE} from "./actionTypes";
import {actionWithType} from "../../utils/utils";
import axios from "axios";

const setFoldersStructure = actionWithType(SET_FOLDERS_STRUCTURE);

export const getFoldersStructure = () => (dispatch) => {
  axios.get('http://localhost:3004/folders').then(({data}) => {
    dispatch(setFoldersStructure(data));
    }
  )
};