import { Link } from "react-router-dom";
import { useState } from 'react';
import icon from '../assets/search.svg';
import UseFetch from "./UseFetch.jsx";
import { useNavigate, useParams } from "react-router-dom";
export default function NavBar() {
     const history = useNavigate();
     const [search, setSearch] = useState('');
     const url = 'http://localhost:3000/api/posts';
     const { data: posts, loading } = UseFetch(url);
     const handleSearch = () => {
         // const title = useParams().title;
         history(`/searched/:title`);
     }


     return(
          <>
               <nav className="navbar navbar-expand-md bg-light">
                    <div className="container-fluid">
                         <Link
                             to='/'
                             className='bg-white px-3 py-1 shadow text-decoration-none fw-bold rounded'
                         >
                              Chat
                         </Link>
                         <div className="nav">
                              <Link to='/create' className="nav-link">Profile</Link>
                              <Link to='/register' className="nav-link">Subscribe</Link>
                              <Link to="#" className="btn btn-danger">Logout</Link>
                         </div>
                    </div>
               </nav>
          </>
     );
}