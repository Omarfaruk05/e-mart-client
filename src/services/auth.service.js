import { decodedToken } from "../utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

export const AUTH_KEY = "accessToken";

export const storeUserInfo = ({ accessToken }) => {
  setToLocalStorage(AUTH_KEY, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(AUTH_KEY);

  if (authToken) {
    const decodedData = decodedToken(authToken);

    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(AUTH_KEY);

  return !!authToken;
};

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};
