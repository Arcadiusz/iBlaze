import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {loadDetails} from "../actions/detailsAction";

import {useDispatch} from "react-redux";

const GameDiv = styled(motion.div)`
    min-height: 400px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    height: 30vmin;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

function Game({name, released, image, id}) {
    const dispatch = useDispatch();

    const loadDetailsHanlder = () => {
        dispatch(loadDetails(id));
    };

    return (
        <GameDiv onClick={loadDetailsHanlder}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </GameDiv>
    );
}

export default Game;
