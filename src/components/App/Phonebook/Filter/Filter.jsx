import { nanoid } from "nanoid"
import { useSelector, useDispatch } from "react-redux"
import { getFilter, setFilter } from "redux/filter"
import { FilterCounteiner, FilterLabel, FilterInput } from "./Filter.styled"

export const Filter = () => {

    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const filterId = nanoid()

    function handleChange ({currentTarget}) {
        dispatch(setFilter(currentTarget.value))
    }

    return  <FilterCounteiner>
                <FilterLabel htmlFor={filterId}>Find contacts by name:</FilterLabel>
                <FilterInput autoComplete="off" type="text" name="filter" placeholder="Filter" value={filter} id={filterId} onChange={handleChange}/>
            </FilterCounteiner>
}