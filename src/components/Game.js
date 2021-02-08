import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {loadDetails} from "../actions/detailsAction";

import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

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
        height: 80%;
        object-fit: cover;
    }
`;

function Game({name, released, image, id}) {
    const dispatch = useDispatch();

    const loadDetailsHanlder = () => {
        dispatch(loadDetails(id));
        document.body.style.overflow = "hidden";
    };

    const stringPathId = id.toString();

    return (
        <GameDiv layoutId={stringPathId} onClick={loadDetailsHanlder}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <motion.img
                    layoutId={`image ${stringPathId}`}
                    src={image}
                    alt={name}
                />
            </Link>
        </GameDiv>
    );
}

export default Game;
