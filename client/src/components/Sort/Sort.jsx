import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortByPrice, sortByRating } from '../../redux/actions/actions';

export default function Sort() {
  const dispatch = useDispatch();

  const [sort, setSort] = useState('');

  const sortHandle = (e) => {
    setSort(e.target.value);
    sort === 'rating' ? dispatch(sortByPrice()) : dispatch(sortByRating());
  };

  return (
    <div>
      <FormControl className="form" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Sort</InputLabel>
        <Select
          onChange={sortHandle}
          value={sort}
          labelId="demo-select-small"
          id="demo-select-small"
          label="Category">
          <MenuItem value={'price'}>Price</MenuItem>
          <MenuItem value={'rating'}>Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
