import React, { Component } from 'react';
import '../styles/index.css';
import AddEntryForm from "./AddEntryForm"
import Entry from "./Entry"
import base from '../base'

//  update and create new log entries
class Log extends Component {
  constructor(){
    super()
    this.renderLogin = this.renderLogin.bind(this)
    this.authenticate = this.authenticate.bind(this)
    this.authHandler = this.authHandler.bind(this)
    this.state = {
      uid: null,
      owner: null
    }
  }

  handleChange(){
    console.log("add post");
  }
  authenticate(provider){
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler)
  }
  authHandler(err, authData){
    console.log(authData);
    if (err) {
      console.error(err)
      return
    }

    // grab the log info from firebase
    const logRef = base.database().ref()

    // query firebase once for the store info
    logRef.once('value', (snapshot) => {
      const data = snapshot.val() || {}
      console.log(data);

      // claim it as our own if there is no owner already
      if(!data.owner) {
        logRef.set({
          owner: authData.user.uid
        })
      }

      this.setState({
        uid: authData.user.uid,
        owner: data.owner || authData.user.uid
      })
    })
  }

  renderEntries(){
    // inputs: day, date, progress, thoughts, link, tweet
    console.log("render entries");
  }

  // const grabLogInfo = " "

  // firebase query here
  renderLogin() {
    return (
      <nav className="login">
        <h2>Log</h2>
        <p>Login to start</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log into Github</button>
        <button className="twitter" onClick={() => this.authenticate('twitter')}>Log into Twitter</button>
      </nav>
    )
  }
  render() {
    // check if anyone is logged in at all. If not, render the result of the renderLogin fn.
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
      // now don't forget to bind renderLogin
    }

    // check if they are the owner of the current store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you aren't the owner of this log!</p>
        </div>
      )
    }
    return (
      <div className="Log">
        <AddEntryForm
          date={this.props.date}
          day={this.props.day}
          addEntry={this.props.addEntry} />
          <br />

            {Object
              .keys(this.props.entries)
              .map(key =>
                <Entry key={key} index={key} details={this.props.entries[key]}
                listEntry={this.listEntry}
              />).reverse()}

      </div>
    );
  }
}

export default Log;
