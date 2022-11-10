import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm, ContactList, Filter } from '../../components'
import { fetchContacts, getContacts, getError, getIsLoading } from 'redux/contacts';
import { Box, MainTitle, SectionTitle } from './App.styled';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts)
  const loading = useSelector(getIsLoading)
  const error = useSelector(getError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

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
          {loading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
      </Box>
    </>
  )
}
