import React, {useEffect, useState} from "react";
import '../App.css';


import PostList from "../components/Post/PostList";
import PostForm from "../components/Post/PostForm";
import PostFilter from "../components/Filter/PostFilter";
import { usePosts } from "../hooks/usePosts";
import PostService from "../api/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPagesArray, getPagesCount } from "../pages/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  
const [posts, setPosts] = useState([
  //  {id: 1, title: 'Javascript', body: 'Javascript is a programming language'},
  //  {id: 2, title: 'Python', body: 'Python is a programming language'},
  //  {id: 3, title: 'C++', body: 'C++ is a programming language'}
])
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(10)
const [page, setPage] = useState(1)
const [filter, setFilter] = useState({sort: '', query: ''});
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data)
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPagesCount(totalCount, limit));
});

useEffect(() => {
fetchPosts()
}, [page])

const createPost = (newPost)  => {
  setPosts([...posts, newPost])
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const changePage = (page) => {
  setPage(page)
  
}
  return (
    <div className="App">
      <header className="App-header">
       <PostFilter
       filter={filter}
       setFilter={setFilter}/>
       <PostForm create={createPost}/>
       {postError &&
       <h1>An error ${postError}</h1>}
       {isPostsLoading
       ? <h1>Loading............</h1>
       : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='All about JS'/>}
       <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
       </header>
    </div>
   
  
  );

}

export default Posts;

