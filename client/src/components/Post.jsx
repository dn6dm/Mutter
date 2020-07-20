import React, { useState } from "react";
import axios from "axios";

function Post(props) {
  const post = props.obj;
  let [votes, setVotes] = useState(post.votes);
  let link = "/posts/" + post._id;

  function upvote() {
    axios
      .patch("http://localhost:5000/api/posts/" + post._id + "/upvote")
      .then((response) => {
        setVotes(response.data.votes);
      });
  }

  function downvote() {
    axios
      .patch("http://localhost:5000/api/posts/" + post._id + "/downvote")
      .then((response) => {
        setVotes(response.data.votes);
      });
  }

  return (
    <div className="col-lg-6">
      <a href={link}>
        <h2>{post.content}</h2>
      </a>
      <div>
        <button onClick={upvote} />
        <p>{votes}</p>
        <button onClick={downvote} />
      </div>
    </div>
  );
}

export default Post;
