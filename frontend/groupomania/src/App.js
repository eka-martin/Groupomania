import React, {useState} from "react";
import './App.css';


import Counter from './components/Counter';
import PostList from "./components/Post/PostList";
import PostForm from "./components/Post/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
  
  // const items = [
  //   'Tache1',
  //   'Tache2',
  //   'Tache3',
  // ]
  // const lis = items.map((item, k) => <li key={k}>{item}</li>)

const [posts, setPosts] = useState([
  // {id: 1, title: 'Javascript', body: 'Javascript is a programming language'},
  // {id: 2, title: 'Javascript', body: 'Javascript is a programming language'},
  // {id: 3, title: 'Javascript', body: 'Javascript is a programming language'}
])

const [selectedSort, setSelectedSort] = useState("")

const createPost = (newPost)  => {
  setPosts([...posts, newPost])
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const sortPosts = (sort) => {
  setSelectedSort(sort);
  setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
       {/* <ul>
        {lis}
       </ul> */}
       <div>
        <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sorting"
        options={[
          {value: "title", name: "By title" },
          {value: "body", name: "By description" }
        ]}
        />
        </div>
       <PostForm create={createPost}/>
        
       <PostList remove={removePost} posts={posts} title='All about JS'/>
       {/* <h1>Posts are not found</h1> */}
      
      </header>
    </div>
   
  
  );

}



export default App;

