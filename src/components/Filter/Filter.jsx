import { changeFilter } from 'Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChangeFilter = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <label>
      <input
        className={styles.serch}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
        placeholder="   Search by name"
      />
    </label>
  );
};
