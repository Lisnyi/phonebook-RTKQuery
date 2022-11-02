import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilteredContacts } from 'redux/contacts';
import { Button } from 'components/App/App.styled'
import { ContactRegister, ContactItem } from './ContactList.styled'

export const ContactList = () => {

    const contacts = useSelector(getFilteredContacts)
    const dispatch = useDispatch()
    
    const markup = contacts.map(({id, name, number}) => (
        <ContactItem key={id}>
            {name}: {number}
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </ContactItem>
    ))

    return  <ContactRegister>
                {markup}
            </ContactRegister>
}