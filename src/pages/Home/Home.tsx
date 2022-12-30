import { useEffect } from "react"
import styled from "styled-components";
import { fetchCharacters } from "../../redux/actions/characters.actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import './styles.css'

const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding-right: 20px;
`

const CharacterItem = styled.div`
  min-height: 280px;
  display: flex;
  flex-direction: column;
`

const statusClass: Record<string, string> = {
  'Alive': 'status-alive',
  'Dead': 'status-dead',
  'unknown': 'status-unknown'
}
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
          return (
          <CharacterItem key={character.id}>
            <img className="characterImage"  src={character.image} alt={character.name} />
            <div className="character-item__info">
              <div className="character-item__info-name">{character.name}</div>
              <div><strong>Species:</strong> {character.species}</div>
              <div><strong>Status:</strong> <span className={`character-item__info-status ${statusClass[character.status]}`}>{character.status}</span></div>
            </div>
          </CharacterItem>)
        })
      }
      </CharactersContainer>
    </div>
  )
}
