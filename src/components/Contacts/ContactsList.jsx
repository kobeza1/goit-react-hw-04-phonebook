import PropTypes from 'prop-types';
import { List, Item } from './ContactsList.styled';

export const ContactsList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => onClick(id)}>
              Delete
            </button>
          </Item>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
