import css from "../ContactsPage/contactsPage.module.css"
import { useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts, getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

const ContactsPage = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isFilteredContacts = Boolean(filteredContacts.length);
  const isAllContacts = Boolean(allContacts.length);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Add contact</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <>
        {isFilteredContacts && <ContactList />}
        {!isFilteredContacts && isAllContacts && (
          <p className={css.text}>
            There is no filtered result according your request.
          </p>
        )}
        {!isAllContacts && (
          <p className={css.text}>
            Your contacts list is empty. Please add contact.
          </p>
        )}
      </>
    </div>
  );
};

export default ContactsPage;
