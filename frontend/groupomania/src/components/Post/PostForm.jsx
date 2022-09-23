import React, {useState} from "react";
import MyInput from "./components/UI/input/MyInput";
import {Button} from '@mui/material';


const PostForm = function ({create}) {
const [title, setTitle] = useState('')
const [body, setBody] = useState('')

const addNewPost = (e) => {
    e.preventDefault()
      // it's very important to add smth new in the end of current massif
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    create(newPost)
    setTitle('')
    setBody('')
    }
    return (
        
        <form>
        {/* componente controlée */}
        <MyInput 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        type="text" 
        placeholder="Title of post"/>
        {/* componente non-controlée useRef*/}
        <MyInput 
        value={body} 
        onChange={e => setBody(e.target.value)}
        type="text" 
        placeholder="Text of post"/>
        <Button onClick={addNewPost} variant="contained">Add a post</Button>
       </form>
          
          
    )
}

export default PostForm;