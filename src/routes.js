import React from 'react'
import { Route, Switch } from 'react-router-dom';


// Components
import App from './components/App';
import Login from './components/Login'
import Home from './components/Home'
import AdminUser from './components/AdminUser'
import Page404 from './components/Page404'
import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory()

const AppRoutes = () =>

    <App>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/administracion/users" component={AdminUser} />
            <Route exact path="/administracion/users/:method" component={AdminUser} />
            <Route exact path="/administracion/users/:method/:id" component={AdminUser} />
            <Route component={Page404} />

        </Switch>

    </App>;

export default AppRoutes;

