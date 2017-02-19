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
      </div>
    )
  }
}
export default App;
