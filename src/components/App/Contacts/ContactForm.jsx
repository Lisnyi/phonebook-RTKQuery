import { nanoid } from 'nanoid'
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types'
import { Button } from '../App.styled';
import { NewContactForm, Input, Label, Error } from './ContactForm.styled';

export const ContactForm = ({addContact}) => {

    const initialValues = {
        name: '',
        number: ''
    }

    const schema = yup.object().shape({
        name: yup.string()
            .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
            .required(),
        number: yup.string()
            .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
            .required()
      });

    const nameId = nanoid()
    const numberId = nanoid()

    const handleSubmit = ({name, number}, {resetForm}) => {
        addContact(name, number)
        resetForm()
    }
    
        return  <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                    <NewContactForm autoComplete='off'>
                        <Label htmlFor={nameId}>Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id={nameId}
                            placeholder="Name"
                        />
                        <Error name="name" component="span"/>
                        <Label htmlFor={numberId}>Number</Label>
                        <Input
                            type="tel"
                            name="number"
                            id={numberId}
                            placeholder="+380-546"
                        />
                        <Error name="number" component="span"/>
                        <Button type='submit'>Add contact</Button>
                    </NewContactForm>
                </Formik>
    }

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
}