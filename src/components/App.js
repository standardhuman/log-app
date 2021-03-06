import React, { Component } from 'react';
import '../styles/index.css';
import Log from "./Log"
import sampleEntries from '../sampleEntries.js'
// import Clock from "./Clock"
// import { Tweet } from 'react-twitter-widgets'
import base from '../base'

// displays past entries, contains list and create view
class App extends Component {
  // initialize state
  constructor () {
    super ()
    // bind all functions to *this* here
    this.addEntry = this.addEntry.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.logout = this.logout.bind(this)
    this.day = this.day.bind(this)
    // this.tweet = this.tweet.bind(this)
    // this.removeEntry = this.removeEntry.bind(this)
    // this.createDate = this.createDate.bind(this)

    this.state = {
      entries: {}
    }

  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.params.userID}/entries`, {
      context: this,
      state: 'entries'
    })

  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addEntry(entry){
    // copy of state
    const entries = {...this.state.entries}
    // creates unique id code per entry
    const timeStamp = Date.now()
    // assign unique id to each entry as it's created
    entries[`entry${timeStamp}`] = entry
    // update actual state with result of copy of state
    this.setState({entries})
    // now scroll down and pass addEntry to AddEntryForm.js via props and invoke on form onSubmit
  }

  listEntry(key, updatedEntries){
    const entries = {...this.state.entries}
    entries[key] = updatedEntries
    this.setState({
      entries
    })
    console.log("listed entries");
  }

  loadSamples() {
    this.setState({
      entries: sampleEntries
    })
    console.log("Tried to load entries");
  }

  removeEntry(){
    console.log("remove entry");
  }

  day() {
    // # of existing entries + 1
    let day = Object.keys(this.state.entries).length + 1
    return day
  }

  logout(){
    console.log("logout");
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
    const logout = <button>Log out</button>
    return (
      <div className="App">
        {/*list-of-entrys.map  */}
        <br />
        <h1>100 Days of Code</h1>
        {/* <Clock
          date={this.getDate}
          day={this.day}
        /> */}
        <div className="utilityButtons">
          {logout}
          <button className='loadSampleButton' onClick={this.loadSamples}>Load Sample Data</button>
        </div>
        <Log
          addEntry={this.addEntry}
          date={this.getDate}
          day={this.day}
          entries={this.state.entries}
          logId={this.props.params.logId}
        />
      </div>
    );
  }
}

export default App;
