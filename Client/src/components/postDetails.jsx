// eslint-disable-next-line react/prop-types
export default function PostCard({ posts }) {
    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <h2>Title: <br />{posts.title}</h2>
                    <p>message: <br />{posts.message}</p>
                    <p>Created_by: <br />{posts.creator}</p>
                </div>
            </div>
        </>
    )
}