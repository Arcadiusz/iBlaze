import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

const AppHeader = styled.h1`
    margin: 2rem 0;
    text-align: center;
`;

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <AppHeader>Hello iBlaze</AppHeader>
            <Home />
        </div>
    );
}

export default App;
