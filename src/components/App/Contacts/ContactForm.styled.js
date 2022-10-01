import styled from "styled-components";
import { Form, Field, ErrorMessage } from 'formik';

export const NewContactForm = styled(Form)`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 8px;
    width: fit-content;
`

export const Input = styled(Field)`
    margin-bottom: 8px;
    padding: 3px;
    padding-left: 10px;
    width: 400px;
    border: none;
    outline: 1px solid blue;
    border-radius: 3px;


    &:focus {
        outline: 1px solid orange;
    }
`

export const Error = styled(ErrorMessage)`
    font-size: 12px;
    color: red;
    margin-bottom: 8px;
`