import React, {useState} from "react";
import MyInput from "./components/UI/input/MyInput";



const PostForm = function () {
    const [title, setTitle] = useState('')
const [body, setBody] = useState('')
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