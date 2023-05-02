import { Link } from "react-router-dom"
import BlogPost from "../components/BlogPost"

const AllBlogPosts = (props) => (
    
    <>
    <Link to='/new'>
    <button>Add A New Blog</button>
    </Link>

     {props.posts.map((post) => <BlogPost post={post} key={post.id} deleteBlog={props.deleteBlog} />)}
    
    </>
   
)

export default AllBlogPosts