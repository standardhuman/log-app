import React, { Component } from 'react';
import './styles/App.css';
import Log from "./Log"

// displays past posts, contains update and create view

class App extends Component {
  constructor () {
    super ()
    // bind all functions to this here
  }

  addPost(){
    console.log("add post");
  }
  updatePost(){
    console.log("update post");
  }
  removePost(){
    console.log("remove post");
  }

  render() {
    return (
      <div className="App">
        {/*list-of-posts.map  */}
        <Log />
      </div>
    );
  }
}

export default App;
