import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button ({clickLoadMore}) {
  
  return (
    <div>
      <button
        type="button"
        className={styles.button}
        onClick={clickLoadMore}
      >
        Load more
      </button>
    </div>
  );
  
}

Button.propTypes = {
  clickLoadMore: PropTypes.func.isRequired,
};
