import React, {useState} from "react";
import './App.css';



import PostList from "./components/Post/PostList";
import PostForm from "./components/Post/PostForm";
import PostFilter from "./components/Filter/PostFilter";
import { usePosts } from "./hooks/usePosts";


function App() {
  
const [posts, setPosts] = useState([
  //  {id: 1, title: 'Javascript', body: 'Javascript is a programming language'},
  //  {id: 2, title: 'Python', body: 'Python is a programming language'},
  //  {id: 3, title: 'C++', body: 'C++ is a programming language'}
])

const [filter, setFilter] = useState({sort: '', query: ''})
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(response.data)
}

const createPost = (newPost)  => {
  setPosts([...posts, newPost])
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">
      <header className="App-header">
       <button onClick={fetchPosts}>Get Posts</button>
       <PostFilter
       filter={filter}
       setFilter={setFilter}/>
       <PostForm create={createPost}/>
       <PostList remove={removePost} posts={sortedAndSearchedPosts} title='All about JS'/>
       </header>
    </div>
   
  
  );

}



export default App;

