import React, {useState} from "react";
import PostItem from "./PostItem";
import {Button} from '@mui/material';


const PostList = function ({posts, title}) {
    
    return (
        <div>
        <h1>{title}</h1>
        {posts.map(post => 
          <PostItem post={post} key={post.id}/>
          )}
          
          </div>
    )
}

export default PostList;