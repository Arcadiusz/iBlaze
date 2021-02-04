import {POPULAR_GAMES} from "../api";

export const loadGames = () => async (dispatch) => {
    //FETCH DATA
    const popularGames = await fetch(POPULAR_GAMES).then((res) => res.json());

    console.log(popularGames);
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGames.results,
        },
    });
};
