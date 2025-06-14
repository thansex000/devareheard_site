export const IS_PRODUCTION = process.env.NODE_ENV === "production";
// export const API_URL = "https://api.example.com"; // Replace with your actual API URL
export const API_TIMEOUT = 5000; // 5 seconds

const Router_language = "/language"

export const PATH = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    DASHBOARD: "/dashboard",
    PROFILE: "/profile",
    SETTINGS: "/settings",
    NOT_FOUND: "*",
};
export const LEARN = {
    CHINESE: Router_language + "/learn-chinese"
}

export const APP_NAME = "MyApp";
export const APP_VERSION = "1.0.0";