import React from 'react'
import { useGetContactsQuery } from 'redux/contacts/contacts-api';
import { ContactForm, ContactList, Filter } from '../../components'
import { Box, MainTitle, SectionTitle } from './App.styled';


export const App = () => {
  const {data: contacts, isLoading, isSuccess, isError, error, isFetching} = useGetContactsQuery()

  return (
    <>
      <Box>
        <MainTitle>Phonebook</MainTitle>
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
    </>
  )
}
