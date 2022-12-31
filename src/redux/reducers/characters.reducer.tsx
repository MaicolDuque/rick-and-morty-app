
import { FETCH_CHARACTERS_COMPLETE, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_START, UPDATE_CHARACTERS_FILTERS } from "../actions/characters.actions";

export interface CharactersFilters {
  page: number;
  name: string;
  status: string;
  gender: string;
  species: string;
}

export interface CharactersState {
  characters: any[],
  filters: CharactersFilters;
  isLoading: boolean;
  error: Record<string, string>;
}

const initialState: CharactersState = {
  characters: [],
  filters: {
    page: 1,
    name: '',
    status: '',
    gender: '',
    species: ''
  },
  isLoading: false,
  error: {}
}

export default function charactersReducer (state =  initialState, action: any){
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return { ...state, isLoading: true };
    case FETCH_CHARACTERS_COMPLETE:
      return { ...state, isLoading: false, characters: action.payload };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, isLoading: false, error: action.error };
    case UPDATE_CHARACTERS_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload }}
    default:
      return state
  }
}
