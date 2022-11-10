import React from 'react'
import { useGetContactsQuery } from 'redux/contacts/contacts-api';
import { ContactForm, ContactList, Filter } from '../../components'
import { MainBox, Box, MainTitle, SectionTitle } from './App.styled';


export const App = () => {
  const {data: contacts, isLoading, isSuccess, isError, error} = useGetContactsQuery()

  return (
    <MainBox>
      <MainTitle>Phonebook</MainTitle>
      <Box>
        <ContactForm contacts={contacts}/>
      </Box>
  
      <Box>
          <SectionTitle>Contacts</SectionTitle>
          <Filter/>
          {isSuccess && contacts.length
            ? <ContactList contacts={contacts}/>
            : null}
          {isLoading && <p>Loading...</p>}
          {isError && <p>{error.message}</p>}
      </Box>
    </MainBox>
  )
}
