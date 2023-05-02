import {useState, useEffect} from 'react'
import AllBlogPosts from './pages/AllBlogPosts';
import SingleBlogPost from './pages/SingleBlogPost';
import Form from './pages/Form';
import './App.css';
import {Route, Routes} from 'react-router-dom'

const apiURL = 'https://blog-api-backend.herokuapp.com'

function App() {
  
  const [posts, setPosts] = useState([])

  const getBlogs = async () => {
    const response = await fetch(apiURL + '/blog/')
    const data = await response.json()
    setPosts(data)
  }

  useEffect(()=> {
    getBlogs()
  }, [])

  const handleFormSubmission =  async (data, type) => {

    if(type === 'new'){
      const response = await fetch(`${apiURL}/blog/`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    } else {
      const response = await fetch(`${apiURL}/blog/${data.id}/`,{
        method: 'put',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    }
  }

  const deleteBlog =  async (id) => {
    const response = await fetch(`${apiURL}/blog/${id}/`, {
      method: 'delete',
      
    })
    getBlogs()
  }


  return (
    <div className="App">
     <h1>My Blog List</h1>
      <Routes>
      <Route
      exact
      path="/"
      element={<AllBlogPosts posts={posts} deleteBlog={deleteBlog} />}
      />
      <Route 
      path='/post/:id'
      element={<SingleBlogPost posts={posts} />}
      />
      <Route 
      path='/new'
      element = {<Form handleSubmit={handleFormSubmission} buttonLabel='Add Blog' formType='new' />}
      />
      <Route
      path='/edit/:id'
      element = {<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Edit Blog' formType='edit' />}
      />


      </Routes>


    </div>
  )
}

export default App;
