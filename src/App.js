import React from 'react';
import {Redirect, Route, Switch, BrowserRouter as Router,} from 'react-router-dom';
import routes from './routes';


function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {
                        routes.filter(r => !r.layout).map(r =>
                            <Route exact={r.exact} path={r.path} key={r.path} component={r.component}/>
                        )
                    }
                    <Route exact path={"/"}>
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
