import PropTypes from 'prop-types';
import React from 'react';
import { CardWrapper } from './Card.styles';
import { Flex, Label } from '../common/Common.styles';

const Card = ({ id, name, watchersCount }) => (
  <CardWrapper>
    <Flex>
      <Label fontWeight="bold">ID:</Label>
      <Label>{id}</Label>
    </Flex>
    <Flex>
      <Label fontWeight="bold">Name</Label>
      <Label>{name}</Label>
    </Flex>
    <Flex>
      <Label fontWeight="bold">Watchers Count:</Label>
      <Label>{watchersCount}</Label>
    </Flex>
  </CardWrapper>
);

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  watchersCount: PropTypes.number,
};

Card.defaultProps = {
  id: 'N/A',
  name: 'N/A',
  watchersCount: 0,
};
export default Card;
