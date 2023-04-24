import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
// import { getFilter } from 'redux/filterSlice';
import { getFilteredContacts } from 'redux/selectors';

import { Label, Input } from './Filter.styled';

const Filter = ({ onChange }) => {
  const filter = useSelector(getFilteredContacts);

  // const dispatch = useDispatch();

  // const onChange = e => {
  //   // console.log(`filter: ${filter}`);
  //   dispatch(getFilter(e.currentTarget.value));
  // };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name={filter} value={filter} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};

export default Filter;
