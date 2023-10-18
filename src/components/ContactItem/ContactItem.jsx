import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

export const ContactItem = ({ onDelete, name, number }) => {
  return (
    <div className={styles.div}>
      <p>{name}:</p>
      <p>{number}</p>

      <button className={styles.delBtn} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
