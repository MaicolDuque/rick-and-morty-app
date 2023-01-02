import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import { useDebounce } from "../../hooks/useDebounce"
import { fetchCharacters, updateCharactersFilters } from "../../redux/actions/characters.actions"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { Modal } from "../Modal/Modal"
import fiterIcon from '../../assets/filters.png'
import './styles.css'

const NavbarContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const genders = [
  { name: 'All', value: '' }, { name: 'Female', value: 'female' }, { name: 'Male', value: 'male' },
  { name: 'Genderless', value: 'genderless' }, { name: 'Unknown', value: 'unknown' }
]

const status = [
  { name: 'All', value: '' }, { name: 'Active', value: 'active' }, { name: 'Dead', value: 'dead' },
  { name: 'Unknown', value: 'unknown' },
]

export function Navbar(){
  const dispatch = useAppDispatch();
  const debounce = useDebounce()
  const filters = useAppSelector(state => state.charactersReducer.filters)
  const [ openModal, setOpenModal ] = useState(false)
  const handleSearch = (e: ChangeEvent<HTMLInputElement> ) => {
    debounce(() => {
      dispatch(updateCharactersFilters({ name: e.target.value, page: 1 }))
      dispatch(fetchCharacters())
    }, 500)
  }

  const handleFilters = (type: string, event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateCharactersFilters({ [type]: event.target.value, page: 1 }))
    dispatch(fetchCharacters())
  }

  const modalHeader = (
    <h2 style={{ color: '#02b1c9' }}>Filters</h2>
  );

  const modalBody = (
    <div className="modal-body-filters">
      <div>
        <div className="container-filter-options">
          <label htmlFor="gender">Gender: </label>
          <select value={filters.gender} name="gender" id="gender" onChange={(e) => handleFilters('gender', e)}>
            {
              genders.map(gender => (
                <option key={gender.value} value={gender.value}>{gender.name}</option>
              ))
            }
          </select>
        </div>
      </div>

      <div>
        <div className="container-filter-options">
        <label htmlFor="status">Status: </label>
          <select value={filters.status} name="status" id="status" onChange={(e) => handleFilters('status', e)}>
            {
              status.map(state => (
                <option key={state.value} value={state.value}>{state.name}</option>
              ))
            }
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <NavbarContainer>
      <input type="text" placeholder="Search a character" onChange={handleSearch} />
      <img src={fiterIcon} alt="Add Filters" title="Add Filters" className="filter-image" onClick={() => setOpenModal(true)} />
      { openModal && <Modal onCloseModal={() => setOpenModal(false)} body={modalBody} header={modalHeader} /> }
    </NavbarContainer>
  )
}
