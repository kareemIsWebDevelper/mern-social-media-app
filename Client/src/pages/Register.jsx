

export default function Register() {
    return(
        <>
            <form className='container card'>
              <div className='form-group mt-3 mb-3'>
                  <input className='form-control' type='text' placeholder='Enter your name' />
                  <br />
                  <input className='form-control' type='text' placeholder='Enter your email' />
                  <br />
                  <input className='form-control' type='text' placeholder='Enter your password' />
              </div>
            </form>
        </>
    )
}