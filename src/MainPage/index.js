import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import UserList from "../UserList";

import "./mainPage.css";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // This useEffect launch a search against Github API when search value changes
  useEffect(() => {
    search.trim()
      ? fetch(`https://api.github.com/search/users?q=${search}`)
          .then(async (response) => {
            const data = await response.json();
            if (!response.ok) {
              // If response ok key is false, we throw an error with the message returned
              const error = data?.message;
              return Promise.reject(error);
            }
            // Else we set usersData with data.items
            setUsersData(data.items);
          })
          .catch((error) => {
            // We reset usersData
            setUsersData([]);
            if (error.includes("API rate limit"))
              // We handle the case we're error come from API rate exceeded
              setErrorMessage("Too many search, please try again in some time");
            // Otherwise we just throw a generec message
            else setErrorMessage("An error occured, please try again");
          })
      : // If the search value is back empty we reset the usersData
        setUsersData([]);
  }, [search]);

  return (
    <div className="main-page">
      <img
        src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
        alt="Github_Logo"
      />
      <SearchBar setSearch={setSearch} search={search} />
      <UserList
        usersData={usersData}
        errorMessage={errorMessage}
        search={search}
      />
    </div>
  );
};

export default MainPage;
