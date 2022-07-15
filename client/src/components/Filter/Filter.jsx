import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Filter.scss';
import { useDispatch } from 'react-redux';
import { loadItems, startLoad, finishLoad } from '../../redux/actions/actions';

export default function SelectVariants() {
  const [category, setCategory] = useState('all');
  const dispatch = useDispatch();

  const fetchItems = async () => {
    dispatch(startLoad());
    const { data } = await axios.get('http://localhost:5000/filter-items', {
      params: {
        type: category,
      },
    });

    setTimeout(() => {
      dispatch(loadItems(data.data));
      dispatch(finishLoad());
    }, 800);
  };

  const handleChange = async (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    fetchItems();
  }, [category]);

  return (
    <div className="form">
      <FormControl className="form" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Category</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={category}
          label="Category"
          onChange={(e) => {
            handleChange(e);
          }}>
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'phone'}>Phones</MenuItem>
          <MenuItem value={'laptop'}>Laptops</MenuItem>
          <MenuItem value={'tv'}>TVs</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
