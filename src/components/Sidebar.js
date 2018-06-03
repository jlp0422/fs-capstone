import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    props.loggedIn ?
      <div className='sidebar container-fluid'>
      <NavLink to='/' exact> Home </NavLink>
      <NavLink to='/categories'> Categories </NavLink>
      <NavLink to='/teams'> Teams </NavLink>
      <NavLink to='/games/active'> Active Game </NavLink>
      <NavLink to='/games/past'> Past Games </NavLink>
      <NavLink to='/scores'> Scores </NavLink>
    </div>
    : null
  )
}

export default Sidebar;