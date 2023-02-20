import { combineReducers } from "@reduxjs/toolkit";

import charactersReducer from './characters.reducer'
import characterDetailReducer from '../slices/character.slice'

export default combineReducers({
  charactersReducer,
  characterDetailReducer
});
