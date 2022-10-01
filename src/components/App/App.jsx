import React, { Component } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import { ContactForm, ContactList, Filter } from '../../components'
import { Box, MainTitle, SectionTitle } from './App.styled';

export default class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }
  
  handleChange = ({currentTarget}) => {
    this.setState({
      [currentTarget.name]:currentTarget.value
    })
  }

  isDuplicate(name) {
    const { contacts } = this.state
    const normalizedName = name.toLocaleLowerCase()
    const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === normalizedName)
    return result
  }
  
  addContact = (name, number) => {
    if (this.isDuplicate(name)) {
      return Notify.warning(`${name} is already in contacts`)
    }
    const newContact = {
      id: nanoid(),
      name,
      number
    }
    this.setState((prev)=>{
        return {
          contacts: [...prev.contacts, newContact]
        }
      })
  }

  deleteContact = (id) => {
    this.setState((prev) => {
        const contactsList = prev.contacts.filter((contact) => contact.id !== id);

        return {
            contacts: contactsList
        }
    })
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state
    
    if (!filter) {
        return contacts
    }

    const normalizedFilter = filter.toLocaleLowerCase()
    const filteredContacts = contacts.filter(({name}) => {
        const normalizedName = name.toLocaleLowerCase()
        const result = normalizedName.includes(normalizedFilter)
        return result;
    })

    return filteredContacts;
  }

  render() {
    const { handleChange, addContact, getFilteredContacts, deleteContact } = this
    const { filter } = this.state
    const contacts = getFilteredContacts()

    return (
      <>
        <Box>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm addContact={addContact}/>
        </Box>
    
        <Box>
            <SectionTitle>Contacts</SectionTitle>
            <Filter filter={filter} handleChange={handleChange}/>
            {contacts.length
              ? <ContactList contacts={contacts} deleteContact={deleteContact}/>
              : null}
        </Box>
      </>
    );
  }
}

