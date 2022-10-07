import React, { useState, useEffect } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import { ContactForm, ContactList, Filter } from '../../components'
import { Box, MainTitle, SectionTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  const filteredContacts = getFilteredContacts()

  useEffect(()=>{
    const newContacts = JSON.parse(localStorage.getItem("contacts"))
    if (newContacts?.length) {
      setContacts(newContacts)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts))
  },[contacts])

  function handleChange ({currentTarget}) {
    setFilter(currentTarget.value)
  }

  function isDuplicate (name) {
    const normalizedName = name.toLocaleLowerCase()
    const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === normalizedName)
    return result
  }

  function addContact (name, number) {
    if (isDuplicate(name)) {
      return Notify.warning(`${name} is already in contacts`)
    }
    const newContact = {
      id: nanoid(),
      name,
      number
    }
    setContacts((prev)=>([...prev, newContact]))
  }

  function deleteContact (id) {
    setContacts((prev) => prev.filter((contact) => contact.id !== id))
  }

  function getFilteredContacts () {
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
            ? <ContactList contacts={filteredContacts} deleteContact={deleteContact}/>
            : null}
      </Box>
    </>
  )
}
