import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { getFilter } from '../../redux/filterSlice';

import { Label, Input } from './Filter.styled';

const Filter = filter => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    // console.log(e);
    const { value } = e.currentTarget;
    dispatch(getFilter(value));
    // console.log(value);
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name={filter} onChange={handleChangeFilter} />
    </Label>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
};

export default Filter;
