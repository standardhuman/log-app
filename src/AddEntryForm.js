import React, { Component } from 'react';
import './AddEntryForm.css';

//  creates a new entry

class AddEntryForm extends Component {

  createEntry() {
    const entry = {
      day: "",
      progress: "",
      thought: "",
      link: "",
      tweet: "" 
    }
  }

  render() {
    return (
      <div className="AddEntryForm">
        {date}
        <form action="">
        <input type="text" name="day"/>
        <input type="text" name="progress"/>
        <input type="text" name="thought"/>
        <input type="text" name="link"/>
        <input type="text" name="tweet"/>
        <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddEntryForm;
