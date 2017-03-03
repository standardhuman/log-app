import React, { Component } from 'react';
import '../styles/Log.css';
import AddEntryForm from "./AddEntryForm"
import Entry from "./Entry"

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
        **Log** <br />
        <button onClick={this.props.loadSamples}>Load Sample Data</button>
        <AddEntryForm
          date={this.props.date}
          day={this.props.day}
          addEntry={this.props.addEntry} />
          <br />
          <ul>
            {Object
              .keys(this.props.entries)
              .map(key =>
                <Entry key={key} index={key} details={this.props.entries[key]}
                listEntry={this.listEntry}
              />).reverse()}
            </ul>
            Log
      </div>
    );
  }
}

export default Log;
