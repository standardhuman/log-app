import React, { Component } from 'react';
import './styles/AddEntryForm.css';

//  creates a new entry

class AddEntryForm extends Component {

  createEntry(e) {
    e.preventDefault()
    const entry = {
      day: this.day.value,
      date: this.date.value,
      progress: this.progres.value,
      thought: this.thought.value,
      link: this.link.value,
      tweet: this.tweet.value
    }
    this.props.addEntryForm(entry)
  }

  render() {
    return (
      <div className="AddEntryForm">
        <div>{ this.props.date() }</div>
        <div>{ this.props.day()}</div>
        <form action="" onSubmit={(e) => this.createActivity(e)}>

        <input type="text" name="progress" ref={(input) => this.progress = input} placeholder="today's progress" /><br />

        <input type="text" name="thought" ref={(input) => this.thought = input} placeholder="thoughts" /><br />

        <input type="text" name="link" ref={(input) => this.link = input} placeholder="link to your work" /><br />

        <input type="text" name="tweet" ref={(input) => this.tweet = input} placeholder="tweet" /><br />
        <button>Submit</button>

        </form>
      </div>
    );
  }
}

export default AddEntryForm;
