import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faServer, faMobileButton, faUserTie } from '@fortawesome/free-solid-svg-icons';
export default function navbar() {
  return (
    <div>
      <nav className='navbar'>
    <ul className='Homeul'>
      <a className='Homea' href='/About'><li className='icons'>About &nbsp;<FontAwesomeIcon icon={faUserTie} /></li></a>
      <a className='Homea' href='/ '><li className='icons'>Home &nbsp;<FontAwesomeIcon icon={faMobileButton} /></li></a>
      <a className='Homea' href='/Project'><li className='icons'>Projects &nbsp;<FontAwesomeIcon icon={faListCheck} /></li></a>
      <a className='Homea' href='/'><li className='icons'>Services &nbsp;<FontAwesomeIcon icon={faServer} /></li></a>
    </ul>
  </nav>
    </div>
  )
}



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faListCheck, faMobileButton, faUserTie } from '@fortawesome/free-solid-svg-icons';

// export default function Navbar() {
//   return (
//     <nav className='navbar'>
//       <ul className='Homeul'>
//         <NavItem to='/About' text='About' icon={faUserTie} />
//         {/* <NavItem to='' text='Skills' icon={faScrewdriverWrench} /> */}
//         {/* <NavItem to='' text='Contacts' icon={faMobileButton} /> */}
//         <NavItem to='/' text='Home' icon={faMobileButton} />
//         <NavItem to='/Project' text='Projects' icon={faListCheck} />
//         {/* <NavItem to='/' text='Services' icon={faServer} /> */}
//       </ul>
//     </nav>
//   );
// }

// function NavItem({ to, text, icon }) {
//   return (
//     <li className='icons'>
//       <Link className='Homea' to={to}>{text} &nbsp;<FontAwesomeIcon icon={icon} /></Link>
//     </li>
//   );
// }