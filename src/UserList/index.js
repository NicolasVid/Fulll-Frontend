import React from "react";
import PropType from "prop-types";
import User from "./User";

import "./userList.css";

const UserList = ({ usersData, errorMessage, search }) => {
  return (
    <div className="user-list">
      {usersData?.length > 0 ? (
        usersData.map((user) => <User key={user.id} user={user} />)
      ) : errorMessage ? (
        <p className="user-list__error">{errorMessage}</p>
      ) : (
        search.trim() && <p>No results found</p>
      )}
    </div>
  );
};

UserList.propTypes = {
  usersData: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
    })
  ).isRequired,
  errorMessage: PropType.string.isRequired,
  search: PropType.string.isRequired,
};

export default UserList;
