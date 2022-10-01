import { nanoid } from "nanoid"
import PropTypes from 'prop-types'
import { FilterCounteiner, FilterLabel, FilterInput } from "./Filter.styled"

export const Filter = ({filter, handleChange}) => {

    const filterId = nanoid()

    return  <FilterCounteiner>
                <FilterLabel htmlFor={filterId}>Find contacts by name:</FilterLabel>
                <FilterInput autoComplete="off" type="text" name="filter" placeholder="Filter" value={filter} id={filterId} onChange={handleChange}/>
            </FilterCounteiner>
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}