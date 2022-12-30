import { useEffect } from "react"
import styled from "styled-components";
import { fetchCharacters } from "../../redux/actions/characters.actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export function Home(){
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.charactersReducer.characters)
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

	return (
    <div>
      HOME
      <CharactersContainer>
      {
        characters.map((character: Record<string, string>) => {
          return <div style={{ height: '100px'}} key={character.id}> {character.name}</div>
        })
      }
      </CharactersContainer>
    </div>
  )
}
