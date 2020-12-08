import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import PostForm from "./PostForm";

function User() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([])


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

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/posts/`);
      const newPosts = await response.json();
      setPosts(newPosts)
    })();
  }, [posts]);

  if (!user) {
    return null;
  }



  return (
    <div>
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
      <PostForm />
      {posts.map(post => (
        <Post username={post.userId} caption={post.caption} imageUrl={post.content} />
      ))}
    </div>

  );
}
export default User;
