import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Box } from './App.styled';
import { ContactsList } from './Contacts/ContactsList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) setContacts(contacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const onClickDelete = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
    setFilter('');
  };

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const formSubmitHandler = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };

    contacts.map(contact => contact.name).includes(newContact.name)
      ? window.alert(`${newContact.name} is already in your phonebook`)
      : setContacts(state => [newContact, ...state]);
  };

  return (
    <Box>
      <Section title={'Phonebook'}>
        <Form Submit={formSubmitHandler} />
      </Section>
      <Section title={'Contacts'}>
        <Filter value={filter} onChange={onFilterChange} />
        <ContactsList contacts={contactsFiltered} onClick={onClickDelete} />
      </Section>
    </Box>
  );
};

export default App;
