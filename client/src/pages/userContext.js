import React from "react";

var UserContext = React.createContext({
  username: "",
  email: "",
  image: "",
  capitalizeFirstLetter: () => {},
  handleBtnClick: () => {}
});

export default UserContext;