import { deleteContact } from 'Redux/Slicies/contactsSlice';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contacts }) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      {contacts.map(contact => (
        <li className={css.list_item} key={contact.id}>
          <p>{contact.name}:</p> <p>{contact.number}</p>
          <button
            type="button"
            onClick={() => onDelete(contact.id)}
            className={css.delete_button}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};

export default ContactListItem;
