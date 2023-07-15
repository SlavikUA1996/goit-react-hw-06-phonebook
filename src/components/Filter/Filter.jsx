import PropTypes from 'prop-types';
import './Filter.module.css';

export const Filter = ({ value, changeFilterInput }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={changeFilterInput} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  changeFilterInput: PropTypes.func,
};