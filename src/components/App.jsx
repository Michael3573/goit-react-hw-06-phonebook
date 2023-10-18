import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.text}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
