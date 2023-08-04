import React from 'react'
import {Link } from 'react-router-dom'

function PageItem(props) {
  return (
    <>
      <li className='pages__item'>
        <Link className="pages__item__link" to={props.path}>
            <figure className='pages__item__pic-wrap' data-category={props.label}>
                <img src={props.src} alt='Travel Image' className='pages__item__img'/>
            </figure>
            <div className = "pages__item__info">
                <h5 className='pages__item__text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default PageItem