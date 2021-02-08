import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import logo from "../img/logo.svg";

//redux and routes
import {fetchSearch} from "../actions/gamesAction";
import {useDispatch} from "react-redux";

import {fadeIn} from "../animations";

function Nav() {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const handleInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const onSubmitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };

    const clearSearched = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    };

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>iBlaze</h1>
            </Logo>
            <form className="search">
                <input
                    value={textInput}
                    onChange={handleInputChange}
                    type="text"
                />
                <button onClick={onSubmitSearch}>search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 2rem 4rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
        outline: none;
        transition: 100ms;

        &:focus {
            transform: scale(1.02);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        }

        @media all and (max-width: 1024px) {
            width: 100%;
        }
    }

    button {
        font-size: 1rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background-color: #ff7676;
        color: #fff;

        @media all and (max-width: 1024px) {
            margin-top: 1rem;
        }
    }
    img {
    }
`;

const Logo = styled(motion.div)`
    width: min-content;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;

    img {
        width: 1.5rem;
        vertical-align: middle;
        margin-right: 1rem;
    }
`;
export default Nav;
