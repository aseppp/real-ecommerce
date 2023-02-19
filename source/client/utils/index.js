const setToken = (token) => {
  return localStorage.setItem("token", JSON.stringify(token));
};

export { setToken };
