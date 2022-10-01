import styled from "styled-components";

export const Box = styled.section`
    margin: 0;
    padding: 16px;
`

export const MainTitle = styled.h1`
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
`