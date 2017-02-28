import React, { Component } from 'react';
import '../styles/Entry.css';

class Tweet extends Component{

  // getInitialState() {
  //   return {
  //     text: ""
  //   }
  // }
  constructor(props) {
    super(props)
    this.state = {text: ""}
    this.handleChange = this.handleChange.bind(this)
  }

  // sets the text key of state to the value of the tweet box on each keystroke (I think)
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }
  // sets the photoAdded key of state to the oppoisite of whatever photoAdded was before, in the first use, from false to true.
  // togglePhoto(event) {
  //   this.setState({photoAdded: !this.state.photoAdded});
  // }
  // if a photo was added, starts remaining available tweet length at 140 - 23 - length of state.text. if no photo, starts at 140 - state.text
  remainingCharacters() {
    console.log("remaining characters");
    console.log(this.state.text.length);
      return 140 - this.state.text.length;
  }
  // if remainingCharacters returns less than 0, show an alert.
  overflowAlert() {
    if (this.remainingCharacters() < 0) {
        var beforeOverflowText = this.state.text.substring(140 - 10, 140);
        var overflowText = this.state.text.substring(140);
      return (
        <div className="alert alert-warning">
          <strong>Oops! Too Long:</strong>
          &nbsp;...{beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="Tweet">
        {/* immediately check for character overflow */}
        {this.overflowAlert()}
        {/* tweet input box */}
        <textarea className="form-control" onChange={this.handleChange} placeholder="tweet"></textarea>
        <br />
        {/* display remaining characters */}
        <span>{this.remainingCharacters()}</span><br />
        {/* tweet button that only enables if there's something in the tweetbox */}
        {/* disabled={this.state.text.length === 0 */}
        <button className="btn btn-primary pull-right">Tweet</button>
        {/* button to add photo */}
        {/* <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo"}
        </button> */}
      </div>
    )
  }
}

export default Tweet;
