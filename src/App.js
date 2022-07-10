import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
import React, { useState } from "react";

function App() {
  const [UserDatas, setUserData] = useState([]);
  const AddUserData = (user, age) => {
    setUserData((prev) => {
      return [...prev, { user, age, key: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUserData={AddUserData}></AddUser>
      <UserList UserDatas={UserDatas}></UserList>
    </div>
  );
}

export default App;
