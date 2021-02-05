import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";

//COMPONENTS
import Game from "../components/Game";

import styled from "styled-components";
import {motion} from "framer-motion";

const GamesKindHeader = styled.h1`
    margin: 5rem 0;
`;

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const {popularGames, newGames, upcomingGames} = useSelector(
        (state) => state.games,
    );

    console.log(popularGames);
    return (
        <GameList>
            <GamesKindHeader>Popular Games</GamesKindHeader>
            <Games>
                {popularGames.map((game) => {
                    return (
                        <Game
                            key={game.id}
                            name={game.name}
                            released={game.released}
                            image={game.background_image}
                        />
                    );
                })}
            </Games>

            <GamesKindHeader>upcomingGames</GamesKindHeader>

            <Games>
                {upcomingGames.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </Games>

            <GamesKindHeader>New Games</GamesKindHeader>
            <Games>
                {newGames.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 5rem 2rem;
    /* grid-column-gap: 2rem; */
`;
export default Home;
