import axios from "axios";

export const Login = (data) => {
  return async (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login", data)
      .then((res) => {
        if (res.status === 200) {
          return dispatch({
            type: "connect",
            payload: res.data.body.token,
          });
        } else {
          console.log("g502x");
        }
      });
  };
};

export const Logout = (dispatch) => {
  return dispatch({
    type: "connect",
    payload: "",
  });
};
