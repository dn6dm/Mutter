import React, { useState } from "react";
import axios from "axios";
import "./Post.css";

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
      <div className="Post row">
        <div className="col-10">
          <a href={link}>
            <div className="content">
              <h2>{post.content}</h2>
            </div>
          </a>
        </div>
        <div className="col-2">
          <div className="Vote">
            <button className="fas fa-angle-up fa-2x" onClick={upvote} />
            <p>{votes}</p>
            <button className="fas fa-angle-down fa-2x" onClick={downvote} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
