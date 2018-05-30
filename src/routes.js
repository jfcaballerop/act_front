import React from 'react'
import { Route, Switch } from 'react-router-dom';


// Components
import App from './components/App';
import Login from './components/Login'
import Home from './components/Home'
import AdminUser from './components/AdminUser'
import GenericList from './components/GenericListData'
import Page404 from './components/Page404'
import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory()

const AppRoutes = () =>

    <App>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/actuaciones/cons_ord" component={GenericList} />
            <Route path="/actuaciones/cons_ord/:id" component={GenericList} />
            <Route path="/actuaciones/cons_ord/delete/:id" component={GenericList} />
            <Route path="/actuaciones/cons_ord/show/:id" component={GenericList} />
            <Route path="/actuaciones/cons_ord/edit/:id" component={GenericList} />
            <Route path="/administracion/users/:method/:id" component={AdminUser} />
            <Route path="/administracion/users/:method" component={AdminUser} />
            <Route path="/administracion/users" component={AdminUser} />
            <Route path="/" component={Login} />
            <Route component={Page404} />

        </Switch>

    </App>;

export default AppRoutes;

