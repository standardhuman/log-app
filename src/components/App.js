import React, { Component } from 'react';
import '../styles/App.css';
import Log from "./Log"
import sampleEntries from '../sampleEntries.js'

// displays past entries, contains list and create view

class App extends Component {
  // initialize state
  constructor () {
    super ()
    this.state = {
      entries: {}
    }
    // bind all functions to *this* here
    this.addEntry = this.addEntry.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.logout = this.logout.bind(this)
    this.day = this.day.bind(this)
    // this.tweet = this.tweet.bind(this)

    // this.removeEntry = this.removeEntry.bind(this)
    // this.createDate = this.createDate.bind(this)
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

        {logout}

        <Log
          addEntry={this.addEntry}
          date={this.getDate}
          day={this.day}
          loadSamples={this.loadSamples}
          entries={this.state.entries}
        />

      {/* <ul>
        {Object
          .keys(this.state.entries)
          .map(key =>
            <Entry key={key} index={key} details={this.state.entries[key]}
            listEntry={this.listEntry}
          />).reverse()}
        </ul> */}
      </div>
    );
  }
}

export default App;
