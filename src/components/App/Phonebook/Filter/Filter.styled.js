import styled from "styled-components";

export const FilterCounteiner = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

export const FilterLabel = styled.label`
    width: fit-content;
    margin-bottom: 8px;
`

export const FilterInput = styled.input`
    width: 400px;
    padding: 3px;
    padding-left: 10px;
    border: none;
    outline: 1px solid blue;
    border-radius: 3px;


    &:focus {
        outline: 1px solid orange;
    }
`