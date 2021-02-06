const initialState = {
    game: {},
    screenshots: [],
    isLoading: false,
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
                isLoading: false,
            };
        case "GET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return {...state};
    }
};

export default detailReducer;
