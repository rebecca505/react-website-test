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
              src='images/img-12.png'
              text='Read more about Rebecca Frey'
              label='About the Author'
              path='/About-Me'
            />
            
            <PageItem
              src='images/img-11.png'
              text='Learn more information about how to participate in New Day New Me'
              label='More Information'
              path='/Instructions'
            />
          </ul>

            <ul className='pages__items'>
              <PageItem 
                src='images/card-activities.png' 
                text='Take a look at all 52 different cards'
                label='Final Card Back Design'
                path='/Cards'
              />
                
              <PageItem 
                src='images/journal.png' 
                text='Jot down your progress and feelings throughout the activities'
                label='Self Input'
                path='/Journal'
              />
              
              <PageItem 
                src='images/img-13.png'
                text='Learn more about the process of New Day New Me'
                label='Initial Design'
                path='/Background'
              />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Pages;