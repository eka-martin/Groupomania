import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import PostService from "../api/PostService";
import { useFetching } from "../hooks/useFetching";




const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
       })
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data);
       })


  useEffect(() => {
  fetchPostById(params.id)
  fetchComments(params.id)
}, [])

  return (
    <div>
    <h1>You opened a post with ID = {params.id}</h1>
    {isLoading
    ? <h1>Loading.......</h1>
    : <div>{post.title}</div>
    }
    <h1>Comments</h1>
    {isComLoading
    ? <h1>Loading.......</h1>
    : <div>{comments.map(comm =>
    <div key={comm.id}><h5>{comm.email}</h5>
    <div>{comm.body}</div>
    </div>
    )}
    </div>
    }
    </div>
  
  );

}

export default PostIdPage;
