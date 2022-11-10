import { useRemoveContactMutation } from 'redux/contacts/contacts-api'
import { Button } from 'components/App/App.styled'
import { ContactRegister, ContactItem } from './ContactList.styled'
import { useSelector } from 'react-redux'
import { getFilter } from 'redux/filter'


export const ContactList = ({contacts}) => {
    const [removeContact] = useRemoveContactMutation()
    const filter = useSelector(getFilter)

    const getSortedContacts = data => {
      const list = [...data]
      const sortedList = list.sort((a, b) => a.name.localeCompare(b.name));
  
      return sortedList
    }
  
    const getFilteredContacts = data => {
      if (!filter) {
          return data
      }
  
      const normalizedFilter = filter.toLocaleLowerCase()
      const filteredContacts = data.filter(({name}) => {
          const normalizedName = name.toLocaleLowerCase()
          const result = normalizedName.includes(normalizedFilter)
          return result;
      })
  
      return filteredContacts;
    }
  
    const sortedList = getSortedContacts(contacts)
    const contactsList = getFilteredContacts(sortedList)
    
    const markup = contactsList.map(({id, name, number}) => (
        <ContactItem key={id}>
            {name}: {number}
            <Button onClick={() => removeContact(id)}>Delete</Button>
        </ContactItem>
    ))

    return  <ContactRegister>
                {markup}
            </ContactRegister>
}