import React from 'react'
import './buttonL.scss'

import { Link } from 'react-router-dom'

const ButtonL = ({children}) => {
  return (
    <div className='button_container buttonL'>      
      <Link to={`/`}><span className='arrow-hold'><img src="/images/icon-arrow-left.svg" alt="arrow-icon" /></span> 
      <span className='text-hold'>     {children}
      </span>
      </Link>
    </div>
  )
}

export default ButtonL