import { ChangeEvent } from "react"
import styled from "styled-components"
import { useDebounce } from "../../hooks/useDebounce"
import { fetchCharacters, updateCharactersFilters } from "../../redux/actions/characters.actions"
import { useAppDispatch } from "../../redux/hooks"
import './styles.css'

const NavbarContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function Navbar(){
  const dispatch = useAppDispatch();
  const debounce = useDebounce()
  const handleSearch = (e: ChangeEvent<HTMLInputElement> ) => {
    debounce(() => {
      dispatch(updateCharactersFilters({ name: e.target.value, page: 1 }))
      dispatch(fetchCharacters())
    }, 500)
  }

  return (
    <NavbarContainer>
      <input type="text" placeholder="Search a character" onChange={handleSearch} />
    </NavbarContainer>
  )
}
