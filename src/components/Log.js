import React, { Component } from 'react';
import '../styles/Log.css';
import AddEntryForm from "./AddEntryForm"

//  update and create new log entries
class Log extends Component {


  handleChange(){
    console.log("add post");
  }
  authenticate(){
    console.log("update post");
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
    console.log("render entries");
  }

  // const grabLogInfo = " "

  // firebase query here

  render() {

    return (
      <div className="Log">

        <AddEntryForm
          date={this.props.date} day={this.props.day}
          addEntry={this.props.addEntry} /><br />

          <button onClick={this.props.loadSamples}>Load Sample Data</button>

      </div>
    );
  }
}

export default Log;
