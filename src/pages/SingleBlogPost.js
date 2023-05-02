import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"

const SingleBlogPost = ({posts}) => {
    const params = useParams()
   
    
    const currentPost = useMemo(() => posts.find(post => post.id === parseInt(params.id)), [params.id, posts])
    
    return (
        <div>
            <h1>{currentPost.title}</h1>
            <h2>{currentPost.body}</h2>
            <Link to={`/edit/${params.id}`} >
                <button>Edit Blog</button>
            </Link>
            <Link to={'/'}>
                <button>Go Back</button>
            </Link>
        </div>

    )
}

export default SingleBlogPost