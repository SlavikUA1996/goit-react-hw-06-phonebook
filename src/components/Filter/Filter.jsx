import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';
import './Filter.module.css';

export const Filter = () => {
const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onChangeFilter} />
      </label>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   changeFilterInput: PropTypes.func,
// };