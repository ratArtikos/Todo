import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return <header className={s.Header}>

        <div className='logo'>
            <img src={logo} />
        </div>


    </header>
}

export default Header;