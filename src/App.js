import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";

import Button from "./uiElements/Button";
import Container from "./components/Container";
import { userActions } from "./store/user-slice";

var users;
var data;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cloading, setcLoading] = useState(false);
  const dispatch = useDispatch();

  const userStateHandler = (event) => {
    setcLoading(true);
    const url = "https://reqres.in/api/users/" + event.currentTarget.value;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        data = responseJson.data;

        setcLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((responseJson) => {
        users = responseJson.data;
        dispatch(userActions.addUsers(users));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-4 font-sans flex flex-col items-center">
      {loading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
      {!loading && <Container loading={cloading} data={data} />}
      <div className="flex flex-row mt-4 w-full justify-between">
        {!loading &&
          users.map((user) => (
            <Button key={user.id} id={user.id} onClick={userStateHandler} />
          ))}
      </div>
    </div>
  );
};

export default App;
