import React, { useState } from "react";
import SearchBar from "../SearchBar";
import UserList from "../UserList";

import "./mainPage.css";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    fetchUsers();
  };

  const fetchUsers = () => {
    fetch(`https://api.github.com/search/users?q=${search}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.items)
      setUsersData(data.items)
    })
    .catch(error => {
      setErrorMessage(error.toString());
  });
  };

  return (
    <div className="main-page">
      <img
        src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
        alt="Github_Logo"
      />
      <h1>Github user search</h1>
      <SearchBar onSubmit={onSubmit} search={search} setSearch={setSearch} />
      <UserList usersData={usersData} errorMessage={errorMessage} />
    </div>
  );
};

export default MainPage;
