'use client';
import React, { useEffect, useState } from 'react'
import './style.scss'
import buttonInterface from './button.interface';


const Button = ({buttonType = 1} : buttonInterface) => {
  
  return (
    <button type='button' className={`button-container ${buttonType == 2? "button-blue": "button-orange" }`}>
      Pre-order now
    </button>
  )
}

export default Button