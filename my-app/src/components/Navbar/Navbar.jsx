import s from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = () => {
  return <nav className={s.Nav}>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to='' activeClassName={s.active}> Home</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/todo' activeClassName={s.active}> Todo</NavLink>
    </div>
  </nav>
}

export default Nav;