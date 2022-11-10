import styled from "styled-components";

export const MainBox = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
`

export const Box = styled.section`
    margin: 0;
    padding: 10px;
`

export const MainTitle = styled.h1`
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: center;
`

export const SectionTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 8px;
`

export const Button = styled.button`
    background-color: white;
    border: 1px solid grey;
    border-radius: 3px;
    max-width: 100px;
    padding: 3px;

    &:hover, &:focus {
        background-color: blue;
        color: white;
    }

    &:disabled{
        background-color: grey;
        color: white;
    }
`