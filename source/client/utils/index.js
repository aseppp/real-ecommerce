const setToken = (token) => {
  return localStorage.setItem("token", JSON.stringify(token));
};

const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return JSON.parse(token);
  }
};

const setUser = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  }
};

const formatMoney = (num) => {
  if (typeof num == "string") {
    num = num.replace(",", "");
  }
  return Number(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

export { setToken, getToken, formatMoney, setUser, getUser };
