import {POPULAR_GAMES, UPCOMING_GAMES, NEW_GAMES} from "../api";

export const loadGames = () => async (dispatch) => {
    //FETCH DATA
    const popularGames = await fetch(POPULAR_GAMES).then((res) => res.json());
    const upcomingGames = await fetch(UPCOMING_GAMES).then((res) => res.json());
    const newGames = await fetch(NEW_GAMES).then((res) => res.json());

    console.log(popularGames);
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGames.results,
            upcoming: upcomingGames.results,
            new: newGames.results,
        },
    });
};
