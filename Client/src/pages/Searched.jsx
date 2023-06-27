import UseFetch from "../components/UseFetch.jsx";
// import PostDetails from "../components/PostDetails.jsx";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard.jsx";
export default function Details() {
    const { title } = useParams();
    const uri = 'http://localhost:3000/api/posts/searched/';
    const { data: posts } = UseFetch(uri + title);

    return (
        <>
            <div>
                { posts && <PostCard posts={posts}/> }
            </div>
        </>
    )
}