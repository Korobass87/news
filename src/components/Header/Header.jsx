import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import { HomeFillIcon } from '@primer/octicons-react';

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <NavLink className="link-nav" exact to="/news?page=1">
            <HomeFillIcon size={36} fill="#fff" />
          </NavLink>
          <h1>Главные новости </h1>
          <span>Front</span>
          <span> News</span>
        </div>
      </header>
    </>
  );
}

export default Header;
