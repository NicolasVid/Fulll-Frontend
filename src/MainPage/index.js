import SearchBar from "../SearchBar";
import UserList from "../UserList";

import "./mainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <img src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg" alt="Github_Logo" />
      <h1>Github user search</h1>
      <SearchBar />
      <UserList />
    </div>
  );
};

export default MainPage;
