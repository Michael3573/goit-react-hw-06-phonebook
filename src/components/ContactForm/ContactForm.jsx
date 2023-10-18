import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/contactSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.list);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const isExist = contacts.find(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts!`);

      return;
    }

    dispatch(addContact(name, number));
    resetForm();
  };

  const handleChange = evt => {
    if (evt.currentTarget.name === 'name') {
      setName(evt.currentTarget.value);
    } else {
      setNumber(evt.currentTarget.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    handleAddContact(name, number);
    evt.currentTarget.reset();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.form}
        type="text"
        name="name"
        placeholder="   Name"
        value={name}
        onChange={handleChange}
      />
      <input
        className={styles.form}
        type="tel"
        name="number"
        placeholder="   Phone Number"
        value={number}
        onChange={handleChange}
      />
      <button className={styles['add-btn']} type="submit">
        Add Contact
      </button>
    </form>
  );
};
