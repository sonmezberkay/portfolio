import classes from "./Navbar.module.css";

import HomeIcon from '../assets/HomeIcon.svg';
import AboutIcon from '../assets/About.svg';
import ContactIcon from '../assets/Contact.svg';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Brand from '../assets/brand.jpg';
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { Fragment, useContext } from "react";
import BarContext from "../bar-context/BarContext";
import Backdrop from "./Backdrop";


const Navbar = () => {

  const barCtx = useContext(BarContext);
  const barIsOpen = barCtx.barIsOpen;
  const barToggle = barCtx.barToggle;

  const menuClass = barIsOpen ? 'hamburger-menu-open' : 'hamburger-menu';


  return (
    <Fragment>
    <nav className={classes.navbar}>
      <div className={classes["navbar-top"]}>
          <Link className={classes["header-brand"]} to='/'><img src={Brand} alt='brand' /></Link>
      </div>
      <div className={classes["navbar-mid"]}>
        <ul>
          <li className={classes['navbar-mid__icon']}><NavLink activeClassName={classes.active} exact to='/'>
            <img src={HomeIcon} alt='Home' /></NavLink>
          </li>
          <li className={classes['navbar-mid__icon']}><NavLink activeClassName={classes.active} to='/about'>
            <img src={AboutIcon} alt='About me' /></NavLink>
          </li>
          <li className={classes['navbar-mid__icon']}><NavLink activeClassName={classes.active} to='/contact'>
            <img src={ContactIcon} alt='Contact' /></NavLink>
          </li>
        </ul>
      </div>
      <div className={classes["navbar-bottom"]}>
        <ul>
          <li><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/berkay-s%C3%B6nmez-64439a171/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a target='_blank' rel="noreferrer" href="https://www.instagram.com/berkaysonmmez/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a target='_blank' rel="noreferrer" href="https://github.com/sonmezberkay"><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
      </div>
    </nav>
    <div onClick={barToggle} className={classes['hamburger-menu']}>
        <FontAwesomeIcon icon={faBars} />
    </div>
    {barIsOpen && <Sidebar />}
    {barIsOpen && <Backdrop />}
    </Fragment>
  );
};

export default Navbar;
