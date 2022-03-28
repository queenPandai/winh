import React, {useState} from "react";
import "./Navbar.scss"
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import {GiSkills} from "react-icons/gi"
import {MdWorkOutline} from "react-icons/md";
import {BiPhotoAlbum} from "react-icons/bi";


const Navbar = () => {
 
  return  (<>
  <div className="nav-bar">
  <Link className="logo" to='/'>
    <span>W</span>
  </Link>
  <nav>
    <NavLink exact='true' activeclassname='active' to='/'>
      <FaHome/>
    </NavLink>
    <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
      <FaUser/>
    </NavLink>
    <NavLink exact='true' activeclassname='active' className="skills-link" to='/skills'>
      <GiSkills/>
    </NavLink>
    <NavLink exact='true' activeclassname='active' className="works-link" to='/works'>
      <MdWorkOutline/>
    </NavLink>
    <NavLink exact='true' activeclassname='active' className="album-link" to='/album'>
      <BiPhotoAlbum/>
    </NavLink>
    <NavLink exact='true' activeclassname='active' className="contact-link" to='/contact'>
      <FaEnvelope/>
    </NavLink>
  </nav>
</div>
</>)
}

export default Navbar;