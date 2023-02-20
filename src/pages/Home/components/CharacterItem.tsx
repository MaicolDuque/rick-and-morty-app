import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const CharacterItemStyled = styled.div`
  min-height: 280px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const statusClass: Record<string, string> = {
  'Alive': 'status-alive',
  'Dead': 'status-dead',
  'unknown': 'status-unknown'
}

export function CharacterItem({ character }: { character: Record<string, string> }){
  const navigate = useNavigate();
  const onClickItem = () => {
    navigate(`/detail/${character.id}`)
  }

  return (
    <CharacterItemStyled key={character.id} onClick={onClickItem}>
      <img className="characterImage"  src={character.image} alt={character.name} />
      <div className="character-item__info">
        <div className="character-item__info-name" data-testid="character-name">{character.name}</div>
        <div><strong>Species:</strong> {character.species}</div>
        <div><strong>Status:</strong> <span className={`character-item__info-status ${statusClass[character.status]}`}>{character.status}</span></div>
      </div>
    </CharacterItemStyled>
  )
}
