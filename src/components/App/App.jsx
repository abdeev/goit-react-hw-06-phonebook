import { useSelector } from 'react-redux';
import { contactSelector } from 'Redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import css from './App.module.css';

export const App = () => {
  const { contacts } = useSelector(contactSelector);

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
