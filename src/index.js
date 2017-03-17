import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './styles/index.css';
import App from './components/App';
import LogPicker from './components/LogPicker';
import NotFound from './components/NotFound';

// const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={LogPicker} />
        <Match pattern="/log/:logId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('.main'));
