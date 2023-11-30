export const login = (token) => {
  return {
    type: "connect",
    payload: token,
  };
};

export const Logout = () => {
  return {
    type: "connect",
    payload: "",
  };
};

export const userProfile = (data) => {
  return {
    type: "userprofile",
    payload: data,
  };
};

export const userName = (data) => {
  return {
    type: "username",
    payload: data,
  };
};
