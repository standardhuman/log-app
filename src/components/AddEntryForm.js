import React, { Component } from 'react';
import '../styles/AddEntryForm.css';
import Tweet from "./Tweet"

//  creates a new entry

class AddEntryForm extends Component {

  // this is invoked onSubmit of the form.
  createEntry(e) {
    console.log("creating entry");
    // prevents the default page refresh behavior
    e.preventDefault()
    console.log("prevented default");
    // create a nicely formatted object of the form data so it can be consumed by our state object. each value comes from the value of each input field. the values for day and date are coming down from App.js via props.
    console.log("this.props.date",this.props.date());
    const entry = {
      progress: this.progress.value,
      thoughts: this.thoughts.value,
      link: this.link.value
    }
    console.log("entry", entry);
    // finally, invoke the function that adds this new object to our state, as defined up in App.js by addEntryForm, and pass it our newly created instance of our log entry
    this.props.addEntry(entry)
    // nice work! now let's get our new fancy entries to appear below our input fields. This will happen up in Log.js where we will map over the list of entries and send their keys down to Log.js via props.
  }

  render() {
    return (
      <div className="AddEntryForm">
        {/*whenever enter is pressed or the submit button is clicked, run createEntry */}
        <form className="newEntryForm" onSubmit={(e) => this.createEntry(e)}>

        {/* each input should set the value of this.(input name) equal to the value of whatever the user types in. use refs for this. */}
        <textarea type="text" name="progress" ref={(input) => this.progress = input} placeholder="today's progress" /><br />

        <textarea type="text" name="thoughts" ref={(input) => this.thoughts = input} placeholder="thoughts" /><br />

        <input type="text" name="link" ref={(input) => this.link = input} placeholder="link to your work" /><br />

        <Tweet />

        <button>Submit</button>

        </form>
      </div>
    );
  }
}

export default AddEntryForm;
