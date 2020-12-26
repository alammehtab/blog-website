import React from "react";

const PostsList = (props) => {
  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <div key={index} className="container" style={{width:'70%'}}>
            <h1 style={{textDecoration:''}}>{post.title}</h1>
            <p style={{textAlign:'justify'}}>{post.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
