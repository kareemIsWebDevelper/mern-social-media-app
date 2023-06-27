import * as React from "react";
import axios from 'axios';
export default function UseFetch(url) {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)



    React.useEffect(() => {
        // Get Request
        axios
            .get(url)
            .then(res => {
                setLoading(false);
                if (res.data) {
                    let posts = res.data;
                    setData(posts);
                    // console.log(posts.length);
                    // console.log(posts.filter((post) => post.title === 'Welcome to new life'));
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [url]);

    return { data, loading }
}