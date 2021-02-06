import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import {BrowserRouter, Route} from "react-router-dom";

const AppHeader = styled.h1`
    margin: 2rem 0;
    text-align: center;
`;

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <GlobalStyles />
                <AppHeader>Hello iBlaze</AppHeader>
                <Route path={["/game/:id", "/"]}>
                    <Home />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
