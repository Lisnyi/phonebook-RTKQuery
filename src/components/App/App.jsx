import React from 'react'
import { useSelector } from 'react-redux';
import { ContactForm, ContactList, Filter } from '../../components'
import { getContacts } from 'redux/contacts';
import { Box, MainTitle, SectionTitle } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts)

  return (
    <>
      <Box>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm/>
      </Box>
  
      <Box>
          <SectionTitle>Contacts</SectionTitle>
          <Filter/>
          {contacts.length
            ? <ContactList/>
            : null}
      </Box>
    </>
  )
}
