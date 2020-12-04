import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.

  useEffect(() => {
    if (!user) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/`);
      const user = await response.json();
      console.log(user)
      setUser(user);
    })();
  }, [user.id]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {user.id}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
