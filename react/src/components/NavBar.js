import React, { Component } from 'react';

const NavBar = props => {

  return(
    <div>
      <nav>
        <div className='top-bar navbar'>
          <div className='top-bar-left navbar'>
            <p onClick={props.handleBlogClick}>Blog</p>
          </div>
          <div className='top-bar-right navbar'>
            <p onClick={props.handleAboutMeClick}>About Me</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
