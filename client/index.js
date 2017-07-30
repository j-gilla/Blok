import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './src/App.jsx';
import Login from './src/Login.jsx';


const Root = () =>{
    return(
        <Router history={hashHistory}>
            <Route path ="/" component={App} />
            <IndexRoute component ={Login} />
    </Router>
    )
};

ReactDOM.render(<Root />, document.getElementById('root'));
