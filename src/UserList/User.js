import React from "react";
import PropType from "prop-types";

import "./userList.css";

const UserList = ({ user }) => (
  <div className="user-list__card">
    <img src={user?.avatar_url} alt="user_avatar" />
    <p>{user.login}</p>
  </div>
);

UserList.propTypes = {
  user: PropType.shape({
    avatar_url: PropType.string,
    login: PropType.string,
  }).isRequired,
};

export default UserList;
