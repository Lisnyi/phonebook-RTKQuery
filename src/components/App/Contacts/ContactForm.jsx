import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts';
import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as yup from 'yup';
import { Button } from '../App.styled';
import { NewContactForm, Input, Label, Error } from './ContactForm.styled';

export const ContactForm = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts)

    const initialValues = {
        name: '',
        number: ''
    }

    function isDuplicate (name, contactsList) {
        const normalizedName = name.toLocaleLowerCase()
        const result = contactsList.find((contact) => contact.name.toLocaleLowerCase() === normalizedName)
        return result
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
        const newContact = {
        name,
        number
        }
        if (isDuplicate(name, contacts)) {
            return Notify.warning(`${name} is already in contacts`)
        }
        dispatch(addContact(newContact))
        resetForm()
    }
    
    return  <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit} validateOnBlur={false}>
                {({errors, touched}) => (
                    <NewContactForm autoComplete='off'>
                    <Label htmlFor={nameId}>Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id={nameId}
                        placeholder="Name"
                        error={errors.name ? 1 : 0}
                        touched={touched.name ? 1 : 0}
                    />
                    <Error name="name" component="span"/>
                    <Label htmlFor={numberId}>Number</Label>
                    <Input
                        type="tel"
                        name="number"
                        id={numberId}
                        placeholder="+380-546"
                        error={errors.number ? 1 : 0}
                        touched={touched.number ? 1 : 0}
                    />
                    <Error name="number" component="span"/>
                    <Button type='submit'>Add contact</Button>
                </NewContactForm>
                )}
            </Formik>
    }