import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [UserName, setUserName] = useState("");
  const [Age, setAge] = useState(0);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (UserName.length === 0 || Age.length === 0) {
      console.log("빈곳을 채우세요");
      return;
    }
    if (+Age < 1) {
      return;
    }
    props.onAddUserData(UserName, Age);
    setUserName("");
    setAge("");
  };

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageNameChangeHandler = (e) => {
    setAge(parseInt(e.target.value));
  };

  return (
    <div>
      <ErrorModal
        title="error title"
        message="something went wrong"
      ></ErrorModal>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="texts"
            value={UserName}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">age (year)</label>
          <input
            id="age"
            type="number"
            onChange={ageNameChangeHandler}
            value={Age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
