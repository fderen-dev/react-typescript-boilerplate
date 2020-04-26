import React, { FunctionComponent } from 'react';

import gear from '../../statics/icons/gear.svg';

import './App.scss';

const App: FunctionComponent = () => (
  <div className="app">
    <div className="examplary-container">
      <img src={gear} />
    </div>
  </div>
);

export default App;
