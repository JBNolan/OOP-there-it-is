import React, { Component } from 'react';

const Content = props => {

  if(props.showBlog) {
    return(
      <div>
        <p>This is a blog</p>
      </div>
    )
  } else {
    return(
      <div>
        <p>This is about me</p>
      </div>
    )
  }
}

export default Content;
