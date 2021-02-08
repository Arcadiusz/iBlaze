import {POPULAR_GAMES, UPCOMING_GAMES, NEW_GAMES, searchGameUrl} from "../api";

export const loadGames = () => async (dispatch) => {
    //FETCH DATA
    const popularGames = await fetch(POPULAR_GAMES).then((res) => res.json());
    const upcomingGames = await fetch(UPCOMING_GAMES).then((res) => res.json());
    const newGames = await fetch(NEW_GAMES).then((res) => res.json());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGames.results,
            upcoming: upcomingGames.results,
            new: newGames.results,
        },
    });
};

export const fetchSearch = (gameName) => async (dispatch) => {
    const searchedGames = await fetch(searchGameUrl(gameName)).then((res) =>
        res.json(),
    );

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedGames.results,
        },
    });
};
