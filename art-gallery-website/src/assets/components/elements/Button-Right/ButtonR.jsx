import React from 'react'
import './buttonR.scss'

import { Link } from 'react-router-dom'

const ButtonR = ({children}) => {
  return (
    <div className='button_container buttonR'>      
      <Link to={`/location`}><span className='arrow-hold'><img src="/images/icon-arrow-right.svg" alt="arrow-icon" /></span> 
      <span className='text-hold'>     {children}
      </span>
      </Link>
    </div>
  )
}

export default ButtonR