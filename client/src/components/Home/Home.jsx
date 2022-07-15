import React from 'react';
import Items from '../Items/Items';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
export default function Home() {
  return (
    <div>
      <Filter />
      <Sort />
      <Items />
    </div>
  );
}
