// userState.js
const USER_ID_KEY = "userId";

export const setUserId = (newUserId) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(USER_ID_KEY, newUserId);
  }
};

export const getUserId = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(USER_ID_KEY);
  }
  return null; // or any other default value you prefer
};
