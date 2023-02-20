import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCharacterById } from "../../redux/slices/character.slice";
import './styles.css'

export function Detail(){
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useAppSelector(state => state.characterDetailReducer)
  const { id } = useParams()
  useEffect(()=> {
    dispatch(getCharacterById(id))
  }, [id])
	return (
    <>
      <button className="character-detail__back-button" onClick={() => navigate(-1)}>
        {'<<'} Back
      </button>
      <div className="character-detail__container">
        <div>
          <img src={data.image} alt={data.name} />
        </div>
        <div style={{width: '100%'}}>
          <h2 className="character-detail__title">Detail</h2>
          <div className="chatacter-detail-container">
            <div> <strong>Name:</strong> {data.name}</div>
            <div> <strong>Status:</strong> {data.status}</div>
            <div> <strong>Species:</strong> {data.species}</div>
            <div> <strong>Gender:</strong> {data.gender}</div>
            <div> <strong>Origin:</strong> {(data as any).origin?.name}</div>
            <div> <strong>Location:</strong> {(data as any).location?.name}</div>
          </div>
        </div>
      </div>
    </>
  )
}
