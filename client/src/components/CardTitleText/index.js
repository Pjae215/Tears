import React from "react";
import UserContext from "../../pages/userContext";

function CardTitleText() {
  return (
    <UserContext.Consumer>
      {(context) => (
        <h4>{context.capitalizeFirstLetter(context.user.username) +
          " " + context.capitalizeFirstLetter(context.user.email)}</h4>
      )} 
    </UserContext.Consumer>
  );
}

export default CardTitleText;