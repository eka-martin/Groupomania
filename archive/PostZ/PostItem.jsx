import React from "react";
import {Button} from '@mui/material';
import {useNavigate} from "react-router-dom";


const PostItem = function (props) {
    const navigate = useNavigate()   
    return (
        <div className='post'>
          <div className='post_content'>
            <strong>{props.post.id}.{props.post.title}</strong>
            <div>{props.post.body}</div>
            <div className='post__btns'>
              <Button variant="contained" onClick={() => props.remove(props.post)}>Delete</Button>
              <Button variant="contained" onClick={() => navigate(`/posts/${props.post.id}`)}>Open</Button>
              </div>
          </div>
        </div>
    )
}

export default PostItem;