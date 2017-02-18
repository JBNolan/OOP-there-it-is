import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlog: [],
    };
  }

  render(){
    return (
      <div>
        <nav>
          <div className='top-bar navbar'>
            <div className='top-bar-left navbar'>
              <p>Blog</p>
            </div>
            <div className='top-bar-right navbar'>
              <p>About Me</p>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default App;
