import { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
// REST API
const apiUrl = "http://localhost:3004/posts"

function HomePage() {
  const [postList, setPostList] = useState([])
  const [newPostTitle, setNewPostTitle] = useState("")

  // in the scope of the component
  async function fetchPostList() {
    const response = await fetch(apiUrl) // GET
    const data = await response.json()
    setPostList(data) // update our state
  }

  useEffect(() => {
    fetchPostList() // will be called when user land on the page
  }, []) // it will execute only on component did mount

  return (
    <div className="App">
      {postList.map(post => {
        return <Link to={`/post/${post.id}`}>
          <p>{post.title}</p>
        </Link>
      })}
      <Link to="/create-post">Add a post</Link>
    </div>
  );
}

export default HomePage;