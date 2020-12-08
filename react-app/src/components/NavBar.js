import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './styles/NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  return (
    <div className="app__header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        alt=""
        className="app__headerImage" />
        <LogoutButton setAuthenticated={setAuthenticated} />
    </div>
  //   <nav>
  //     <ul>
  //       <li>
  //         <NavLink to="/" exact={true} activeClassName="active">
  //           Home
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/login" exact={true} activeClassName="active">
  //           Login
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/sign-up" exact={true} activeClassName="active">
  //           Sign Up
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/users" exact={true} activeClassName="active">
  //           Users
  //         </NavLink>
  //       </li>
  //       <li>

  //       </li>
  //     </ul>
  //   </nav>
  );
}

export default NavBar;