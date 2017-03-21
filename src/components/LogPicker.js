import React from 'react';
import { getFunName } from '../helpers';

class LogPicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToLog = this.goToLog.bind(this);
  // }
  goToLog(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab the text from the box
    const logId = this.logInput.value;
    console.log(`Going to ${logId}`)
    // second we're going to transition from / to /log/:logId
    this.context.router.transitionTo(`/log/${logId}`);
  }

  render() {
    // Any where else
    return (
      <div className="loginAndNameLog">
      <h1>100 Days of Code</h1>
      <div className="login">
        <form className="log-selector" onSubmit={(e) => this.goToLog(e)}>
          <h2>Github Login</h2>
          <input type="text" required placeholder="username"/>
          <input type="text" required placeholder="password"/>
          <h2>Twitter Login</h2>
          <input type="text" required placeholder="username"/>
          <input type="text" required placeholder="password"/>
          <h2>Name your log</h2>
          <input type="text" required placeholder="Log Name" defaultValue={getFunName()} ref={(input) => { this.logInput = input}} />
          <button type="submit">Go To Log →</button>
        </form>
      </div>
    </div>
    )
  }
}

LogPicker.contextTypes = {
  router: React.PropTypes.object
}

export default LogPicker;
