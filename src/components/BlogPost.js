import { Link, useNavigate } from "react-router-dom"
const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
}




const BlogPost = ({post, deleteBlog}) => {
const navigate = useNavigate()

    const handleDelete = (event) => {
    event.preventDefault()
    deleteBlog(post.id)
    navigate('/')
}

    return (

        <div style={div}>
        <Link to={`/post/${post.id}`} >
            <h1>{post.title}</h1>
        </Link>
        <h2>{post.body}</h2>
        <form onSubmit={handleDelete}>
            <input type='submit' value='Delete Post' />
        </form>
    </div>
    )
}

export default BlogPost 