import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './component/Join';
import Chat from './component/Chat';

const App = () => {
  return(
    <Router>
      <Route path="/" exact component={Join}  />
      <Route path="/Chat" exact component={Chat}  />
    </Router>
  );
}

export default App