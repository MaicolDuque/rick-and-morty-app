import { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import { useDebounce } from "../../hooks/useDebounce";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";
import { fetchCharacters, updateCharactersFilters } from "../../redux/actions/characters.actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CharacterList } from "./components/CharacterList";

const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`

const HomeWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`

const Visor = styled.div`
  height: 20px;
  width: 100%;
`

export function Home(){
  const dispatch = useAppDispatch();
  const debounce = useDebounce()
  const externalRef = useRef(null)
  const [ _page, setPage ] = useState(1)
  const { isLoading } = useAppSelector(state => state.charactersReducer)
  const { isVisible } = useElementOnScreen({ externalRef })
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  const debounceHandleNextPage = useCallback(() => {
    debounce(() => {
      setPage((page) => {
        dispatch(updateCharactersFilters({ page: page + 1 }))
        return page + 1
      })
      dispatch(fetchCharacters(true))
    }, 300)
  }, [])

  useEffect(() => {
    if(isVisible) debounceHandleNextPage()
  }, [debounceHandleNextPage, isVisible])


	return (
    <div>
      <Navbar />
      { isLoading
      ? 'Loading...'
      : <HomeWrapper>
        <CharactersContainer data-testid="characters-container">
          <CharacterList />
        </CharactersContainer>
        <Visor id="visor" ref={externalRef} ></Visor>
      </HomeWrapper>
      }
    </div>
  )
}
