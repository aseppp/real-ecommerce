const setToken = (token) => {
  return localStorage.setItem("token", JSON.stringify(token));
};

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
};

export { setToken, getToken };
