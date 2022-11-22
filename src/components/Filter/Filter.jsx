import PropTypes from 'prop-types';
import { Text } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Text>Find contacts by name</Text>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
