import React from 'react';
import UserContext from "../../pages/userContext";

function CardBody() {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div>
          <h4>
          Display Name: {user.username}
          </h4>
          <h4>
          Email: {user.email}
          </h4>
        </div>
      )}
    </UserContext.Consumer>
  )
}

export default CardBody;