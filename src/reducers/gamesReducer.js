const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searched: [],
};
const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames: action.payload.popular,
                upcomingGames: action.payload.upcoming,
                newGames: action.payload.new,
            };
        default:
            return {...state};
    }
};

export default gamesReducer;
