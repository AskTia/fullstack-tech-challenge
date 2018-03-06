import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Ledger from './Ledger';
import Main from './Main'
import NotFound from './NotFound';

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/ledger/*" component={Ledger} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
