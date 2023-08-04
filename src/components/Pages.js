import React from 'react';
import './Pages.css';
import PageItem from './PageItem';

function Pages() {
  return (
    <div className='pages'>
      <h1>See the history of New Day New Me!</h1>
      <div className='pages__container'>
        <div className='pages__wrapper'>
          <ul className='pages__items'>
            <PageItem
              src='images/img-10.png'
              text='This was the first draft!'
              label='Trial 1'
              path='/Tab-1'
            />
            
            <PageItem
              src='images/img-9.jpg'
              text='This has to be a long sentence in order for it to look good!'
              label='Trial 2'
              path='/Tab-1'
            />
          </ul>

            <ul className='pages__items'>
              <PageItem 
                src='images/img-10.png' 
                text='This was the first draft!'
                label='Trial 1'
                path='/Tab-1'
              />
                
              <PageItem 
                src='images/img-9.jpg' 
                text='This has to be a long sentence in order for it to look good!'
                label='Trial 2'
                path='/Tab-1'
              />
              
              <PageItem 
                src='images/img-9.jpg' 
                text='This has to be a long sentence in order for it to look good!'
                label='Trial 2'
                path='/Tab-1'
              />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Pages;