import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>See the history of New Day New Me!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
                <CardItem 
                src='images/img-10.png' 
                text='This was the first draft!'
                label='Trial 1'
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
