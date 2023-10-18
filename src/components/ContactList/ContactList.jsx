import { ContactItem } from 'components/ContactItem/ContactItem';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contactSlice';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.list);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  return (
    <div>
      <ul className={styles.ContactList}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={styles.phoneBook} key={id}>
              <ContactItem
                onDelete={() => {
                  handleDeleteContact(id);
                }}
                name={name}
                number={number}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
