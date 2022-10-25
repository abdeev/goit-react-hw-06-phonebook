import { filterContacts } from 'Redux/Slicies/filterSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const SearchContactFilter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        onChange={changeFilter}
      />
    </>
  );
};

SearchContactFilter.propTypes = {
  changeFilter: PropTypes.func,
};

export default SearchContactFilter;
