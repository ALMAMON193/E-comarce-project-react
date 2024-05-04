import React, { useState } from 'react';
import "../selectDrop/select.css";

export default function Select() {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const toggleSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  return (
    <div className='selectDropWrapper cursor position-relative'>
      <span className='openSelect' onClick={toggleSelect}>All Categories</span>
      {isOpenSelect && (
        <div className='selectDrop'>
          <div className='searchField'>
            <input type='text' />
          </div>
          <ul className='searchResults'>
            <li>Milks and Dairies</li>
            <li>Wines & Drinks</li>
            <li>Clothing & beauty</li>
            <li>Fresh Seafood</li>
            <li>Pet Foods & Toy</li>
            <li>Fast food</li>
            <li>Baking material</li>
            <li>Vegetables</li>
            <li>Fresh Fruit</li>
            <li>Bread and Juice</li>
            <li>Milks and Dairies</li>
            <li>Wines & Drinks</li>
            <li>Clothing & beauty</li>
            <li>Fresh Seafood</li>
          </ul>
        </div>
      )}
    </div>
  );
}
