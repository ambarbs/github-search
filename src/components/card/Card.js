import PropTypes from 'prop-types';
import React from 'react';
import { CardWrapper } from './Card.styles';

const Card = ( props ) => (
  <CardWrapper data-testid="card">
      {props.children}
  </CardWrapper>
);

Card.propTypes = {
  props: PropTypes.object
};

Card.defaultProps = {
    props: {},
};
export default Card;
