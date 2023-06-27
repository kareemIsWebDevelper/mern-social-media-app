import UseFetch from "../components/UseFetch.jsx";
import PostDetails from "../components/PostDetails.jsx";
import { useParams } from "react-router-dom";
export default function Details() {
    const { id } = useParams();
    const uri = 'http://localhost:3000/api/posts/';
    const { data: posts, loading } = UseFetch(uri + id);

    return (
        <>
            <div className='container'>
                <div>
                    { loading && <p>Loading posts</p> }
                </div>
                <div>
                    { posts && <PostDetails posts={posts}/> }
                </div>
            </div>
        </>
    )
}