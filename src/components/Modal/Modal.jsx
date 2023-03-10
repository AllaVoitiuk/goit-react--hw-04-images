import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { useEffect } from 'react';

export default function Modal({ children, imageURL, onClose }) {
  useEffect(() => {
    const handlePressEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handlePressEsc);
    return () => {
      window.removeEventListener('keydown', handlePressEsc);
    };
  }, [onClose]);

  const handleClickBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <div className={styles.modal__backdrop} onClick={handleClickBackdrop}>
      <div className={styles.modal_content}>
        {children}
        <img src={imageURL} alt="Large_pic" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
