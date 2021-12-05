import React from 'react'
import { Switch, Route } from "react-router-dom"
import Login from './main/Login'
import Home from './Home'
import CategoryPageContainer from './container/CategoryPageContainer'


function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/categorypage/:id/:subid/:listid" exact component={CategoryPageContainer}></Route>
            </Switch>
        </div>
    )
}

export default Routes
