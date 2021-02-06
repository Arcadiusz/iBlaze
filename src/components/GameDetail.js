import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import loadingGif from "./loading.svg";
import {useSelector} from "react-redux";

function GameDetail() {
    const {screenshots, game, isLoading} = useSelector((state) => {
        return state.detail;
    });
    return (
        <>
            <CardShadow>
                <Detail>
                    {isLoading ? (
                        <Loader src={loadingGif} alt="" />
                    ) : (
                        <>
                            <Stats>
                                <div className="rating">
                                    <h3>{game.name}</h3>
                                    <p>Rating: {game.rating}</p>
                                </div>
                                <Info>
                                    <h3>Platforms:</h3>
                                    <Platforms>
                                        {game.platforms &&
                                            game.platforms.map((platform) => {
                                                return (
                                                    <div
                                                        className="platform"
                                                        id={
                                                            platform.platform.id
                                                        }>
                                                        {platform.platform.name}
                                                    </div>
                                                );
                                            })}
                                    </Platforms>
                                </Info>
                            </Stats>
                            <Media>
                                <img src={game.background_image} alt="" />
                            </Media>
                            <Description>
                                <p>{game.description_raw}</p>
                            </Description>
                            <div className="gallery">
                                {screenshots.results &&
                                    screenshots.results.map((screen) => {
                                        return (
                                            <img
                                                src={screen.image}
                                                key={screen.id}
                                                alt="Game screen"
                                            />
                                        );
                                    })}
                            </div>
                        </>
                    )}
                </Detail>
            </CardShadow>
        </>
    );
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: #fff;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: #fff;
    position: absolute;
    min-height: 100vh;
    left: 10%;
    color: #000;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

const Loader = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    width: 10vmin;
    max-width: 100px;
    transform: translate(-50%, -50%);
`;

export default GameDetail;
