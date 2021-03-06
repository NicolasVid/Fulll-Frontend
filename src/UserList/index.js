import React from "react";
import PropType from 'prop-types';

import "./userList.css";

const UserList = ({ usersData, errorMessage }) => {
  return (
    <div className="user-list">
      {usersData.length > 0 ?
        usersData.map((user) => (
          <div key={user.id} className="user-list__card">
            <img src={user?.avatar_url} alt="user_avatar" />
            <p>{user.login}</p>
          </div>
        )): errorMessage ?
        <p>{errorMessage}</p>
      :
      <p>No results found</p>
      }
    </div>
  );
};

UserList.propTypes = {
  usersData: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      avatar_url: PropType.string,
      login: PropType.string,
    }),
  ).isRequired,
  errorMessage: PropType.string.isRequired,
};

export default UserList;
