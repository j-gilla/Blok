import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import App from './src/App.jsx';
import Login from './src/Login.jsx';
import Error from './src/Error.jsx';
import User from './src/User.jsx';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Route  exact path="/" component={App}>
        <Route path="/login" component={Login} />
        <Route path="/user/:accessToken/:refreshToken" component={User} />
        <Route path="/error/:errorMsg" component={Error} />
      </Route>
    </Router>
  );
}
}

const rootElement = document.getElementById('root');
render(<Root />, rootElement);
