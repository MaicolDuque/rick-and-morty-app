import { apiCall } from "../../utils/fetch"
import { AppDispatch } from "../store"

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START'
export const FETCH_CHARACTERS_COMPLETE = 'FETCH_CHARACTERS_COMPLETE'
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR'

export const fetchCharactersStart = () => ({ type: FETCH_CHARACTERS_START })
export const fetchCharactersComplete = (payload: any[]) => ({ type: FETCH_CHARACTERS_COMPLETE, payload })
export const fetchCharactersError = (error: any) => ({ type: FETCH_CHARACTERS_ERROR, error })


//Action creator
export const fetchCharacters = () => async (dispatch: AppDispatch) => {
  try {
      dispatch(fetchCharactersStart());
      const response = await apiCall('https://rickandmortyapi.com/api/character');
      dispatch(fetchCharactersComplete(response.results));
  } catch (error) {
      dispatch(fetchCharactersError(error));
  }
};
