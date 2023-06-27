import { Link } from "react-router-dom";
// import search from '../assets/search.svg';

// eslint-disable-next-line react/prop-types
export default function PostCard({ posts }) {


    return (
       <div className='container'>
           {/* eslint-disable-next-line react/prop-types */}
      
           <div className='row gap-3 mt-5'>
               { posts.map(post => (
                   <div className='col-lg-3 m-auto card shadow' key={post._id}>
                       <h2>Title: <br />{post.title}</h2>
                       <p>message: <br />{post.message}</p>
                       <p>Created_by: <br />{post.creator}</p>
                       <Link to={`details/${post._id}`}>See Details</Link>
                   </div>
               ))}
           </div>
       </div>
    )
}