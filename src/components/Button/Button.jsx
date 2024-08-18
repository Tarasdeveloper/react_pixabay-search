import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
