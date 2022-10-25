import { addContact } from 'Redux/Slicies/contactsSlice';
import { contactSelector } from 'Redux/selectors';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactSelector);

  const handlerSubmit = e => {
    e.preventDefault();
    const inputedData = new FormData(e.target);
    const form = e.target;
    const { name, number } = Object.fromEntries(inputedData);

    const contatctsArr = contacts.map(({ name }) => name);
    if (contatctsArr.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
      form.reset();
    }
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className={css.form_input}>
        <input
          type="text"
          name="name"
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input_name}
        />
        <input
          type="tel"
          name="number"
          placeholder="Enter contact number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input_phone}
        />
        <button type="submit" className={css.button_submit}>
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
