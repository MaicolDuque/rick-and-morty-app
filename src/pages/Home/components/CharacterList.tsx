import { useAppSelector } from "../../../redux/hooks";
import { CharacterItem } from "./CharacterItem";
import './styles.css'

export function CharacterList(){
  const characters = useAppSelector(state => state.charactersReducer.characters)
  return (
    <>
      {
        characters.map((character: Record<string, string>) =>  <CharacterItem character={character} key={character.id} />)
      }
    </>
  )
}
