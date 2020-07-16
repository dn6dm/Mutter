import React from "react";
import Post from "./Post";

function ListPost(props) {
  const posts = props.posts;
  return (
    <div className="row">
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          return <Post obj={post} key={post._id} />;
        })
      ) : (
        <div className="col-12">
          <h2>No posts yet</h2>
        </div>
      )}
    </div>
  );
}

export default ListPost;
