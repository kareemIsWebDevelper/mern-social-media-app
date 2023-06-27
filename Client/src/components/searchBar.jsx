import search from '../assets/search.svg';
export default function searchBar() {
    return (
        <>
            <div className='card shadow'>
                <input
                    type='search'
                    className='custom-form-control'
                    placeholder='Search...'
                />
                <img src={search} width='25px' height='25px' alt='search' />
            </div>
        </>
    )
}