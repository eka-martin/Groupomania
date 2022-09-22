//https://www.section.io/engineering-education/how-to-implement-material-ui-in-react/
import React, {useState, useRef} from "react";
import './App.css';
import {Button} from '@mui/material';

import Counter from './components/Counter';
import PostItem from "./components/Post/PostItem";
import PostList from "./components/Post/PostList";
import MyInput from "./components/UI/input/MyInput";




function App() {
  
  
  // const items = [
  //   'Tache1',
  //   'Tache2',
  //   'Tache3',
  // ]
  // const lis = items.map((item, k) => <li key={k}>{item}</li>)

const [posts, setPosts] = useState([
  {id: 1, title: 'Javascript', body: 'Javascript is a programming language'},
  {id: 2, title: 'Javascript', body: 'Javascript is a programming language'},
  {id: 3, title: 'Javascript', body: 'Javascript is a programming language'}
])

const [posts2, setPosts2] = useState([
  {id: 1, title: 'Python', body: 'Python is a programming language'},
  {id: 2, title: 'Python2', body: 'Python is a programming language'},
  {id: 3, title: 'Python', body: 'Python is a programming language'}
])

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
setPosts([...posts, newPost])
setTitle('')
setBody('')
}

  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
       {/* <ul>
        {lis}
       </ul> */}
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
        <PostList posts={posts} title='All about JS'/>
        <PostList posts={posts2} title='All about Python'/>
      </header>
    </div>
   
  
  );

}



export default App;

