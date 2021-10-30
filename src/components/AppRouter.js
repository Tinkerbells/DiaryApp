import React, {useContext} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../Routes";
import {LOGIN_ROUTE, MENU_ROUTE} from "../utils/Consts";
import {AuthContext} from "../context";
import {useAuthState} from "react-firebase-hooks/auth";


const AppRouter = () => {
    const {auth} = useContext(AuthContext)
    const [user] = useAuthState(auth)
        return user ?
     (
            <Switch>
                {privateRoutes.map(({path, component}) =>
                    <Route path={path} component={component} exact={true} key={path}/>
                )}
                <Redirect to={MENU_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, component}) =>
                    <Route path={path} component={component} exact={true} key={path}/>
                )}
                <Redirect to={LOGIN_ROUTE}/>


            </Switch>
        );
};

export default AppRouter;