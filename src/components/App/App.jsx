import { useSelector } from 'react-redux';
import { contactSelector } from 'components/Redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import css from './App.module.css';

export const App = () => {
  const { contacts } = useSelector(contactSelector);
  // const [contacts, setContacts] = useState(
  //   () =>
  //     getLocalStorage() ?? [
  //       { id: 'id-1', name: 'Pointer Event', number: '459-12-56' },
  //       { id: 'id-2', name: 'Jack Richardson', number: '443-89-12' },
  //       { id: 'id-3', name: 'Stella Artois', number: '645-17-79' },
  //       { id: 'id-4', name: 'Phillp Morris', number: '227-91-26' },
  //       { id: 'id-5', name: 'Klementina Zakruzhetsaya', number: '427-99-17' },
  //     ]
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   setLocalStorage(contacts);
  // }, [contacts]);

  // const handleInputContact = ({ name, number }) => {
  //   const contatctsArr = contacts.map(({ name }) => name);
  //   if (contatctsArr.includes(name)) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     setContacts(prev => (prev = [...prev, { id: nanoid(), name, number }]));
  //   }
  // };

  // const handleFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const handleDeleteContact = id => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };

  return (
    <div className={css.section}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      {!!contacts?.length && (
        <div>
          <h1 className={css.header}>Contacts</h1>
          <Filter />
          <ContactsList />
        </div>
      )}
    </div>
  );
};
