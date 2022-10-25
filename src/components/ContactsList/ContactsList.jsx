import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { contactSelector, filterSelector } from 'Redux/selectors';
import { useFilterArray } from 'Hooks/useFilterArray';

const ContactList = () => {
  const { contacts } = useSelector(contactSelector);
  const { filter } = useSelector(filterSelector);
  const contactsFiltered = useFilterArray(contacts, filter);
  return (
    <ul className={css.phonebook_list}>
      <ContactListItem contacts={contactsFiltered} />
    </ul>
  );
};

export default ContactList;
