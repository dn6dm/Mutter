import React, { useState } from "react";
import axios from "axios";

function CommentForm(props) {
  let id = props.id;
  let [comment, setComment] = useState("");

  function handleClick() {
    axios.patch("http://localhost:5000/api/posts/" + id + "/comment", {
      content: comment,
    });
  }

  function handleChange(event) {
    console.log(event.target.value);
    setComment(event.target.value);
  }

  return (
    <form onSubmit={handleClick}>
      <input onChange={handleChange} type="text" value={comment} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
