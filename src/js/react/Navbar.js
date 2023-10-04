import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';


function Navbar({ items }) {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">StudySync</Link>
      <div className="nav-items">
      {items.map((item, index) => 
  <div key={index} className="nav-item">
    {item.link ? <Link to={item.link} onClick={item.action}>{item.label}</Link> : item.label}
    {item.submenu && 
      <div className="submenu">
        {item.submenu.map((subItem, subIndex) => 
          <Link key={subIndex} to={subItem.link}>{subItem.label}</Link>
        )}
      </div>
    }
  </div>
)}
      </div>
    </nav>
  );
}


export default Navbar;