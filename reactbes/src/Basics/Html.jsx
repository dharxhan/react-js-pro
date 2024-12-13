import react from 'react'

import "./Html.css";

const Html = () => {
  return (
    <div className='Html'>
        <section className='form-wrapper'>
            <form >
                <h1>Login here</h1>
                <input type="text" name='username' placeholder='Enter your name'/>
                <br />
                <input type="email" placeholder='Enter your email' ></input>
                <br /><br />
                <input type="password" placeholder='Enter your password'></input>
                <br /><br />
                <button>Login</button>
            </form>
        </section>

    </div>
  )
}

export default Html
