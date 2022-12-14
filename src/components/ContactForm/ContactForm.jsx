import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, BtnSubmit } from './ContactFormStyled';

const PhonebookContact = ({ onSubmit, phoneContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputText = event => {
    const element = event.currentTarget.value;
    switch (event.target.name) {
      case 'name':
        setName(element);
        break;
      case 'number':
        setNumber(element);
        break;
      default:
        break;
    }
  };

  const onResetInput = () => {
    setNumber('');
    setName('');
  };

  const nameCheck = () => {
    let contactName = true;
    for (const contact of phoneContacts) {
      contact.name.includes(name)
        ? (contactName = false)
        : (contactName = true);
    }
    return contactName;
  };

  const onSubmitForms = ev => {
    ev.preventDefault();
    const a = [...phoneContacts, { id: nanoid(), name: name, number: number }];
    nameCheck() ? onSubmit(a) : alert(name + ' is already in contacts');
    onResetInput();
  };

  return (
    <>
      <Form onSubmit={onSubmitForms}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputText}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputText}
          />
        </Label>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </Form>
    </>
  );
};

PhonebookContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  phoneContacts: PropTypes.array.isRequired,
};

export default PhonebookContact;
