import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Auth from "./components/Pages/Auth";
import CreateArticle from "./components/Pages/AdminPage/CreacteArticle";


export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/auth" exact>
                    <Auth/>
                </Route>
                <Route path="/create-article" exact>
                    <CreateArticle/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/auth" exact>
                <Auth/>
            </Route>
            <Route path="/create-article" exact>
                <CreateArticle/>
            </Route>

            <Redirect to="/"/>
        </Switch>
    )

}