import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import loadingGif from "./loading.svg";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

//images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamePad from "../img/gamepad.svg";

import star from "../img/star.svg";

function GameDetail({pathId}) {
    const {screenshots, game, isLoading} = useSelector((state) => {
        return state.detail;
    });

    const history = useHistory();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    };

    const getPlatformImages = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "Xbox Series S/X":
                return xbox;
            case "PlayStation":
                return playstation;
            case "PlayStation 5":
                return playstation;
            case "PC":
                return steam;
            case "Nintento Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamePad;
        }
    };

    const renderStars = () => {
        let array = [];
        for (let i = 0; i < 5; i++) {
            array.push(<img src={star} />);
        }
        return array;
    };

    return (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathId}>
                {isLoading ? (
                    <Loader src={loadingGif} alt="" />
                ) : (
                    <>
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                                <GameStarsRating rating={game.rating}>
                                    {/* <div>{renderStars()}</div> */}
                                    <div>★★★★★</div>
                                    ★★★★★
                                </GameStarsRating>
                            </div>
                            <Info>
                                <h3>Platforms:</h3>
                                <Platforms>
                                    {game.platforms &&
                                        game.platforms.map((platform) => {
                                            return (
                                                <img
                                                    key={platform.platform.id}
                                                    src={getPlatformImages(
                                                        platform.platform.name,
                                                    )}
                                                    alt={platform.platform.name}
                                                    title={
                                                        platform.platform.name
                                                    }
                                                />
                                            );
                                        })}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img
                                layoutId={`image ${pathId}`}
                                src={game.background_image}
                                alt=""
                            />
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
    z-index: 999;

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

const GameStarsRating = styled.div`
    width: 200px;
    height: 40px;
    position: relative;
    font-size: 40px;
    line-height: 100%;
    div {
        width: ${(props) => (props.rating ? props.rating * 20 : 0)}%;
        position: absolute;
        height: 100%;
        background-color: yellow;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;

export default GameDetail;
