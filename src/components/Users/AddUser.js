// ALL THE COMENTS ARE TO PRACTICE 
// HOW TO DO THE SAME THING BUT WITH useState()

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState, Fragment, useRef } from "react";

import classes from "./AddUser.module.css";

function AddUser(props) {
  //USING useState()
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  // const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const nameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();

  const addUserHandler = (e) => {
    e.preventDefault();

    const finalName = nameRef.current.value;
    const finalAge = ageRef.current.value;
    const finalCity = cityRef.current.value;

    if (
      finalName.trim().length === 0 ||
      finalAge.trim().length === 0 ||
      finalCity.trim().length === 0
    ) {
      setError({
        title: "Not a valid input!",
        message: "Please fill all the fields!",
      });
      return;
    }

    if (+finalAge < 0) {
      setError({
        title: "Not a valid age!",
        message: "Age should be a positive number (> 0)",
      });
      return;
    }

    const user = {
       username: finalName,
       age: finalAge,
       city: finalCity,
    };

    props.onAddUser(user);
    // setUsername("");
    // setAge("");
    // setCity("");
    document.getElementById('username').value = '';
    document.getElementById('age').value = '';
    document.getElementById('city').value = '';
  };

  // const usernameChanger = (e) => {
  //   setUsername(e.target.value);
  // };

  // const ageChanger = (e) => {
  //   setAge(e.target.value);
  // };

  // const cityChanger = (e) => {
  //   setCity(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandle={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={username}
            // onChange={usernameChanger}
            ref={nameRef}
          />
          <label htmlFor="years">Age</label>
          <input
            id="age"
            type="number"
            // value={age}
            // onChange={ageChanger}
            ref={ageRef}
          />
          <label htmlFor="location">City</label>
          <input
            id="city"
            type="text"
            // value={city}
            // onChange={cityChanger}
            ref={cityRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;
