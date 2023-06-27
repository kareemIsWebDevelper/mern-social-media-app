import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Create() {
    const history = useNavigate();

        const [title, setTitle] = useState('');
        const [message, setMessage] = useState('');
        const [creator, setCreator] = useState('');
       const createPost = (e) => {
           e.preventDefault();

           const newPost = { title, message, creator };
           const postUri = 'http://localhost:3000/api/posts';

           axios
               .post(postUri, newPost)
               .then((response) => {
                   history("/");
               })
               .catch(err => { console.log(err) });
       }


    return(
        <>
            <form method='post' onSubmit={createPost} className='container card'>
                <div className='form-group mt-3 mb-3'>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={ title } type='text' name='title'
                        className='form-control' placeholder='Post title'
                    />
                    <br />
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message} name='message' col='3' row='12'
                        className='form-control' placeholder='Post message'
                    />
                    <br />
                    <input
                        onChange={(e) => setCreator(e.target.value)}
                        value={ creator } type='text' name='creator'
                        className='form-control'  placeholder='Post Creator'
                    />
                </div>
                <button
                    type='submit'
                    className='btn btn-primary fw-bold text-white'
                >
                    Publish
                </button>
            </form>
        </>
    )
}