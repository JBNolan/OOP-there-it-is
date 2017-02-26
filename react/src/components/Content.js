import React, { Component } from 'react';

const Content = props => {

  if(props.showBlog) {
    return(
      <div>
        <h1>OOP There It Is</h1>
        <p>This is a blog</p>
      </div>
    )
  } else {
    return(
      <div>
        <h1>John Nolan</h1>
        <p>This is about me</p>
      </div>
    )
  }
}

export default Content;
