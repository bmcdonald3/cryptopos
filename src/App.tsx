// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Configure from './components/Configure'
import Transaction from './components/Transaction';
import Qrcode from './components/Qrcode';
import Confirmed from './components/Confirmed';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/config' exact component={Configure} />
          <Route path='/transaction' exact component={Transaction} />
          <Route path='/qr/:cost' exact component={Qrcode} />
          <Route path='/confirmed' exact component={Confirmed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
