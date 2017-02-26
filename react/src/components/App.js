import React, { Component } from 'react';
import NavBar from './NavBar';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlog: true,
    };

    this.handleBlogClick = this.handleBlogClick.bind(this)
    this.handleAboutMeClick = this.handleAboutMeClick.bind(this)
  }

  handleBlogClick(event) {
    this.setState({
      showBlog: true
    })
  }

  handleAboutMeClick(event) {
    this.setState({
      showBlog: false
    })
  }

  render(){
    return (
      <div>
        <NavBar
        handleBlogClick={this.handleBlogClick}
        handleAboutMeClick={this.handleAboutMeClick}
        />

        <Content
        showBlog={this.state.showBlog}
        />

        <div id="footer" className="text-center">
          <footer>
            <a href={`https://github.com/JBNolan`}>GitHub</a> | <a href={`https://www.linkedin.com/in/john-nolan/`}>LinkedIn</a>
          </footer>
        </div>
      </div>
    )
  }
}
export default App;
