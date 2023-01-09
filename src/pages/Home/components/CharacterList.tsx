import { useAppSelector } from "../../../redux/hooks";
import { CharacterItem } from "./CharacterItem";
import './styles.css'

export function CharacterList(){
  const characters = useAppSelector(state => state.charactersReducer.characters)
  return (
    <>
      { characters.length === 0 && <div data-testid="no-found" className="characters-no-found">No characters found</div> }
      {
        characters.map((character: Record<string, string>) =>  <CharacterItem character={character} key={character.id} />)
      }
    </>
  )
}
