import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/navigation.css';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  // const userProf = <FaUser />;
  const userbox = (
    <div className="user-surround">
      <FaUser />
    </div>
  );
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
    {
      id: 3,
      path: '/user',
      text: userbox,
    },
  ];

  return (
    <nav className="navBar">
      <ul className="navContent">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
