import classes from "./UserList.module.css";

import Card from "../UI/Card";

function UserList(props) {
  const userList = (
    <ul>
      {props.users.map((el) => (
        <li key={Math.random().toString()}>
          {el.name} - {el.age} years old - {el.city}
        </li>
      ))}
    </ul>
  );

  return (
    <Card className={classes.users}>{props.users.length > 0 && userList}</Card>
  );
}

export default UserList;
