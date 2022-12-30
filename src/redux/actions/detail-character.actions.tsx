export const FETCH_CHARACTER_DETAIL_START = 'FETCH_CHARACTER_DETAIL_START'
export const FETCH_CHARACTER_DETAIL_COMPLETE = 'FETCH_CHARACTER_DETAIL_COMPLETE'
export const FETCH_CHARACTER_DETAIL_ERROR = 'FETCH_CHARACTERS_ERROR'

export const fetchCharacterDetailStart = () => ({ type: FETCH_CHARACTER_DETAIL_START })
export const fetchCharacterDetailComplete = (payload: any) => ({ type: FETCH_CHARACTER_DETAIL_COMPLETE, payload })
export const fetchCharacterDetailError = (error: any) => ({ type: FETCH_CHARACTER_DETAIL_ERROR, error })
