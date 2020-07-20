import React, { useState } from "react";
import axios from "axios";

function PostForm() {
  let [newPost, setNewPost] = useState("");

  function handleClick() {
    axios.post("http://localhost:5000/api/posts", {
      content: newPost,
    });
  }

  function handleChange(event) {
    setNewPost(event.target.value);
  }

  return (
    <form onSubmit={handleClick}>
      <input onChange={handleChange} type="text" value={newPost} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
