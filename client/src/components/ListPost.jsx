import React from "react";
import Post from "./Post";
import "./ListPost.css";

function ListPost(props) {
  const posts = props.posts;
  return (
    <div className="container-fluid ListPost">
      <div className="row">
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            return <Post obj={post} key={post._id} />;
          })
        ) : (
          <h2>No Posts Yet</h2>
        )}
      </div>
    </div>
  );
}

export default ListPost;
