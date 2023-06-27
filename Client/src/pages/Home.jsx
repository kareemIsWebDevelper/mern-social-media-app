import PostCard from '../components/PostCard';
import UseFetch from "../components/UseFetch";
import icon from "../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function Home() {
    const history = useNavigate();

    const [title, setTitle] = useState('');
    const url = 'http://localhost:3000/api/posts';
    const { data: posts, loading } = UseFetch(url);

    const handleSubmit = () =>{
            history(`/searched/${ title }/`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className='card shadow position-absolute'                     
                style={{width: 250, right: 300, top: 8}}
            >
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type='search'
                    className='form-control border-0'
                    placeholder='Search...'
                    value={title}
                />
                <img
                    className='position-absolute end-0 top-50 translate-middle'
                    src={icon} width='22px' height='22px' alt='search'
                />
            </form>
        <div className='bg-white'>
            { loading && <p>Loading posts</p> }
        </div>
        <div className='container'>
            { posts && <PostCard posts={posts}/> }
        </div>
        </>
    )
}