import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCharacterById } from "../../redux/slices/character.slice";

export function Detail(){
  const dispatch = useAppDispatch();
  const { id } = useParams()
  useEffect(()=> {
    dispatch(getCharacterById(id))
  }, [id])
	return <div> Detail {id}</div>
}
