import { useEffect } from "react"
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import { fetchCharacters } from "../../redux/actions/characters.actions";
import { useAppDispatch } from "../../redux/hooks";
import { CharacterList } from "./components/CharacterList";

const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`

export function Home(){
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

	return (
    <div>
      <Navbar />
      <CharactersContainer>
        <CharacterList />
      </CharactersContainer>
    </div>
  )
}
