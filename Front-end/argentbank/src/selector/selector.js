import { useSelector } from "react-redux";

export const SelectUser = () => {
  useSelector((state) => state.token);
};

export const SelectUserName = () => {
  useSelector((state) => state.token.username);
};
