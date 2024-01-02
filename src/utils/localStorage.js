export const setToLocalStorage = (key, value) => {
  if (!key || typeof window === "undefined") {
    return "";
  } else {
    return localStorage.setItem(key, value);
  }
};

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  } else {
    return localStorage.getItem(key);
  }
};
