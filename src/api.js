//Base URL
const BASE_URL = "https://rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

const getCurrentYear = () => {
    return new Date().getFullYear();
};

const currentYear = getCurrentYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const POPULAR_GAMES = `${BASE_URL}games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const UPCOMING_GAMES = `${BASE_URL}games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const NEW_GAMES = `${BASE_URL}games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//game details URL
export const gameDetailsUrl = (gameId) => `${BASE_URL}games/${gameId}`;
export const gameScreenshotUrl = (gameId) =>
    `${BASE_URL}games/${gameId}/screenshots`;

//searched game URL
export const searchGameUrl = (gameName) =>
    `${BASE_URL}games?search=${gameName}&page_size=9`;
