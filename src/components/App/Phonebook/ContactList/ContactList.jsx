import PropTypes from 'prop-types'
import { Button } from 'components/App/App.styled'
import { ContactRegister, ContactItem } from './ContactList.styled'

export const ContactList = ({contacts, deleteContact}) => {
    
    const markup = contacts.map(({id, name, number}) => (
        <ContactItem key={id}>
            {name}: {number}
            <Button onClick={() => deleteContact(id)}>Delete</Button>
        </ContactItem>
    ))

    return  <ContactRegister>
                {markup}
            </ContactRegister>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}