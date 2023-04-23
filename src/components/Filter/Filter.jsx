import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filterSlice';
import { filtered } from 'redux/selectors';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(filtered);

  const dispatch = useDispatch();

  const onChange = e => {
    // console.log(`filter: ${filter}`);
    dispatch(getFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name={filter} value={filter} onChange={onChange} />
    </Label>
  );
};

export default Filter;
