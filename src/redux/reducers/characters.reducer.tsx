
import { FETCH_CHARACTERS_COMPLETE, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_START } from "../actions/characters.actions";

export interface CharactersFilters {
  page: number;
  nanme: string;
  status: string;
  gender: string;
  specires: string;
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
    nanme: '',
    status: '',
    gender: '',
    specires: ''
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
    default:
      return state
  }
}
