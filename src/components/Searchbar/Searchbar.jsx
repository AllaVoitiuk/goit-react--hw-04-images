import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { ReactComponent as Logo } from '../../SVG/search.svg';

export default function Searchbar ({onSubmit}) {
  const [searchValue, setSearchValue]= useState('');
 
  const[page, setPage] = useState(1);

  const handleChange = event => {
    setSearchValue (event.target.value.toLowerCase());
  };

   const handleSubmit = event => {
    event.preventDefault();

    if (searchValue.trim() === '') {
      alert('Введіть значення пошуку');
      return;
    }
    
    onSubmit(searchValue,page);
    setSearchValue('');
    setPage(1);
    };

   return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.searchForm_button}>
          <Logo className="logo" />
          <span className={styles.searchForm_button_label}>Search</span>
        </button>

        <input
          className={styles.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );

}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
