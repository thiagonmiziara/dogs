import React from "react";
import PhotoPost from "./endpoints/PhotoPost";
import TokenPost from "./endpoints/TokenPost";
import UserPost from "./endpoints/UserPost";

const Api = () => {
  return (
    <div>
      <h2>User Post</h2>
      <UserPost />
      
      <div>
        <h2>Token Post</h2>
        <TokenPost />
      </div>

      <div>
        <h2>Photo Post</h2>
        <PhotoPost />
      </div>
    </div>
  );
};

export default Api;
