import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container } from './AppStyled';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const onInputFilter = data => {
    setFilter(data.currentTarget.value);
  };

  const onSubmit = data => {
    setContacts(data);
  };

  const onClickDelete = id => {
    setContacts(contacts.filter(el => id !== el.id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} phoneContacts={contacts} />
      <Filter onFilter={onInputFilter} FilterState={filter} />
      <h2>Contacts</h2>
      <ContactList
        onContact={{ contacts, filter }}
        onClickBtn={onClickDelete}
      />
    </Container>
  );
};

export default App;
