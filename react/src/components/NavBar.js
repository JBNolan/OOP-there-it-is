import React, { Component } from 'react';

const NavBar = props => {

  return(
    <div>
      <nav>
        <div className='top-bar navbar topbar'>
          <div className='top-bar-left navbar'>
            <a href={`#`} onClick={props.handleBlogClick}>Blog</a>
          </div>
          <div className='top-bar-right navbar'>
            <a href={`#`} onClick={props.handleAboutMeClick}>About Me</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
