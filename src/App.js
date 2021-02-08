import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";

import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <GlobalStyles />
                <Nav />
                <Route path={["/game/:id", "/"]}>
                    <Home />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
