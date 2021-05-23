import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./container/Welcome";
import Review from "./container/Review";
import Summary from "./container/Summary";
import Menus from "./container/Menus";
import { Container } from "./styles/App";

function App() {
    return (
        <Container>
            <Switch>
                <Route component={Review} path="/review" />
                <Route component={Summary} path="/summary" />
                <Route component={Menus} path="/menus" />
                <Route component={Welcome} path="/" />
            </Switch>
        </Container>
    );
}

export default App;
