import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm, ContactList, Filter } from '../../components'
import { getContacts, getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { Box, MainTitle, SectionTitle } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts)
  const filteredContacts = useSelector(getFilteredContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()


  // useEffect(()=>{
  //   const newContacts = JSON.parse(localStorage.getItem("contacts"))
  //   if (newContacts?.length) {
  //     setContacts(newContacts)
  //   }
  // },[])

  // useEffect(()=>{
  //   localStorage.setItem("contacts", JSON.stringify(contacts))
  // },[contacts])

  function handleChange ({currentTarget}) {
    dispatch(setFilter(currentTarget.value))
  }

  function isDuplicate (name) {
    const normalizedName = name.toLocaleLowerCase()
    const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === normalizedName)
    return result
  }

  function onAddContact (name, number) {
    if (isDuplicate(name)) {
      return Notify.warning(`${name} is already in contacts`)
    }
    const newContact = {
      name,
      number
    }
    dispatch(addContact(newContact))
  }

  function onDeleteContact (id) {
    dispatch(deleteContact(id))
  }

  return (
    <>
      <Box>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={onAddContact}/>
      </Box>
  
      <Box>
          <SectionTitle>Contacts</SectionTitle>
          <Filter filter={filter} handleChange={handleChange}/>
          {contacts.length
            ? <ContactList contacts={filteredContacts} deleteContact={onDeleteContact}/>
            : null}
      </Box>
    </>
  )
}
