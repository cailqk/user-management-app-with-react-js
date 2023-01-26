import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addHandler = (user) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: user.username, age: user.age, city: user.city },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
