import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiCall } from '../../utils/fetch';

export interface CharacterDetailSlice {
  isLoading: boolean;
  error?: Record<string, string>;
  data: Record<string, string>;
}

const initialState: CharacterDetailSlice = {
  isLoading: false,
  data: {}
}

export const getCharacterById = createAsyncThunk(
  'characters/getCharacterById',  //action type string
  async (characterId: string | undefined, _thunkAPI) => { // callback function
    const response = await apiCall(`https://rickandmortyapi.com/api/character/${characterId}`);
    return response
})

const characterDetailSlice = createSlice({
  name: 'characterDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacterById.pending, (state, _action) => {
      state.isLoading = true
    }),
    builder.addCase(getCharacterById.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.data = payload
    }),
    builder.addCase(getCharacterById.rejected, (state, _action) => {
      state.isLoading = false
      state.error = state.error
    })
  }
})

export default characterDetailSlice.reducer
