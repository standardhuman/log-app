import React, { Component } from 'react';
import './styles/Log.css';
import AddEntryForm from "./AddEntryForm"

//  update and create new log entries
class Log extends Component {


  handleChange(){
    console.log("add post");
  }
  authenticate(){
    console.log("update post");
  }
  logout(){
    console.log("logout");
  }
  authHandler(){
    console.log("authHandler");
  }
  renderLogin(){
    // render github button
    // render twitter button
    console.log("renderLogin");
  }
  renderEntries(){
    // inputs: day, date, progress, thoughts, link, tweet
    console.log("render posts");
  }
  // const grabLogInfo = " "

  // firebase query here

  render() {
    const logout = <button>Log out</button>
    return (
      <div className="Log">
        <AddEntryForm date={this.props.date} day={this.props.day}/>
        {logout} <br />
        entries.map
      </div>
    );
  }
}

export default Log;
