import React, { Component } from 'react';
import './styles/App.css';
import Log from "./Log"
import Entry from "./Entry"
import sampleEntries from '../sampleEntries'
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
    this.loadEntries = this.loadEntries.bind(this)
    this.logout = this.logout.bind(this)
    this.listEntry = this.listEntry.bind(this)
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
    console.log("added entry");
  }

  listEntry(key, updatedActivity){
    const entries = {...this.state.entries}
    entries[key] = updatedActivity
    this.setState({
      entries
    })
    console.log("listed entries");
  }

  removeEntry(){
    console.log("remove entry");
  }

  dayCounter() {
    // # of existing entries + 1
    return "Day 15"
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

  loadEntries() {
    this.setState({
      entries: sampleEntries
    })
    console.log("Tried to load entries");
  }

  render() {
    const logout = <button>Log out</button>
    return (
      <div className="App">
        {/*list-of-entrys.map  */}

        <button onClick={this.loadEntries}>Load Sample Data</button><br />

        {logout}


        <Log
          addEntry={this.addEntry}
          date={this.getDate} day={this.dayCounter} />

      <ul>
        {Object
          .keys(this.state.entries)
          .map(key =>
            <Entry key={key} index={key} details={this.state.entries[key]}
            listEntry={this.listEntry}
            />)}
        </ul>
      </div>
    );
  }
}

export default App;
