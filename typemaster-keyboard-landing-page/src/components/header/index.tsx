import React from 'react';
import './style.scss';
import Button from '../button';

const HeaderComponent = () => {
  return (
    <section className='header_container'>
      <header>
        <img src="/images/shared/logo.svg" alt="logo" />
        <Button buttonType={2} />
      </header>
    </section>
  )
}

export default HeaderComponent