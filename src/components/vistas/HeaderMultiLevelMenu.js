import React,{ useState, useEffect} from "react";

import {
  faBell, faPlus, faAngleDown, faAddressBook,  faCog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";


import './headermenu.scss';



const HeaderMultiLevelMenu  =()=>{



  return (
    <div className="header-main-menu">
      <Navbar>
      <NavItem  icon={faBell}/>
      <NavItem  icon={faPlus} />
      <NavItem  icon={faFacebookMessenger} />

      <NavItem icon={faAngleDown}>
          <DropdownMenu></DropdownMenu>
      </NavItem>
      </Navbar>
    </div>
  );
}

function Navbar(props) {  
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}



function NavItem(props) {
  const [open, setOpen] =   useState(false);



  useEffect( ()=> {
    console.log('render!');
   

  }, [open])

  // useEffect(function () {
  //   console.log('render!');

  //   const updateOpen = () => {
     
  //     console.log(` is :${open}`)
  //     setOpen(!open);
  //   }
  //   // Actualizaremos el open al montar el componente
  //   updateOpen();
  // });
  
  return (
    <li className="nav-item">
      <a href="/fec/historia1.html" className="icon-button" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={props.icon} />
      </a>
      {/* muestra el dropdown, si es que el estado cambio */}
      {!open && props.children}
    </li>
  );
}

function DropdownItem(props) {
  return (
    <a href="/fec/historia.html" className="menu-item">
      <span className="icon-button"><FontAwesomeIcon icon={props.leftIcon} /> </span>
      {props.children}
      <span className="icon-right"><FontAwesomeIcon icon={props.rightIcon} /> </span>
    </a>
  );
}

function DropdownMenu() {
  return (
    <div className="dropdown">
        <DropdownItem leftIcon={faAddressBook}>My profile</DropdownItem>
        <DropdownItem leftIcon={faCog}>Settings</DropdownItem>
        {/* <DropdownItem >Foo</DropdownItem>
        <DropdownItem >Bar</DropdownItem> */}
    </div>
  );
}



export default HeaderMultiLevelMenu;
