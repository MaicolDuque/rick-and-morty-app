import { apiCall } from "../../utils/fetch"
import { AppDispatch } from "../store"

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START'
export const FETCH_CHARACTERS_COMPLETE = 'FETCH_CHARACTERS_COMPLETE'
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR'
export const UPDATE_CHARACTERS_FILTERS = 'UPDATE_CHARACTERS_FILTERS'

export const fetchCharactersStart = () => ({ type: FETCH_CHARACTERS_START })
export const fetchCharactersComplete = (payload: any[]) => ({ type: FETCH_CHARACTERS_COMPLETE, payload })
export const fetchCharactersError = (error: any) => ({ type: FETCH_CHARACTERS_ERROR, error })
export const updateCharactersFilters = (payload: Record<string, string | number>) => ({ type: UPDATE_CHARACTERS_FILTERS, payload })


//Action creator
export const fetchCharacters = (nextPage = false) => async (dispatch: AppDispatch, state: any) => {
  try {
      const characters = state().charactersReducer.characters
      let stateFilter = state().charactersReducer.filters
      const filters = Object.entries(stateFilter).reduce((acc, filter) => {
        return acc += `${filter[0]}=${filter[1]}&`
      }, '')
      if(!nextPage) dispatch(fetchCharactersStart());
      const response = await apiCall(`https://rickandmortyapi.com/api/character/?${filters}`);
      const newCharacters = nextPage ? [...characters, ...(response?.results ?? [])] : (response?.results ?? [])
      dispatch(fetchCharactersComplete(newCharacters));
  } catch (error) {
      dispatch(fetchCharactersError(error));
  }
};
