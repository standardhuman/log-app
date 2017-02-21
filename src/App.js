import React, { Component } from 'react';
import './styles/App.css';
import Log from "./Log"

// displays past posts, contains update and create view

class App extends Component {
  constructor () {
    super ()
    this.state = {
      log: {}
    }
    // bind all functions to this here

    // addPost = this.addPost.bind(this)
    // updatePost = this.updatePost.bind(this)
    // removePost = this.removePost.bind(this)
    // createDate = this.createDate.bind(this)
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

  dayCounter() {
    // # of existing entries + 1
    console.log("dayCounter");
    return "Day 15"
  }
  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;
    return today
  }
  render() {
    return (
      <div className="App">
        {/*list-of-posts.map  */}
        <Log date={this.getDate} day={this.dayCounter}/>
      </div>
    );
  }
}

export default App;
