import { useEffect } from "react"
import { fetchCharacters } from "../../redux/actions/characters.actions";
import { useAppDispatch } from "../../redux/hooks";

export function Home(){
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

	return <div>
		HOME
	</div>
}
