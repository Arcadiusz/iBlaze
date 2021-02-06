import {gameDetailsUrl} from "../api";
import {gameScreenshotUrl} from "../api";

export const loadDetails = (id) => async (dispatch) => {
    dispatch({
        type: "GET_LOADING",
    });

    const detailData = await fetch(gameDetailsUrl(id)).then((res) =>
        res.json(),
    );

    const screenshots = await fetch(gameScreenshotUrl(id)).then((res) =>
        res.json(),
    );

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData,
            screenshots: screenshots,
        },
    });
};
