import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import axios from "axios";

const Create = () => {
    const [values, setValues] = useState({name:"", email: ""});

    const navigate = useNavigate();

    function handleCreate(e) {
        e.preventDefault();
        axios.post("", values).then((res) => {
            console.log(res.data);
        });
        navigate("/");
    }
  return (
    <div className='form'>
        <form onSubmit={handleCreate}>
            <h1>Create Data</h1>
            <input 
                placeholder='Enter you name'
                name='name'
                onChange={(e) => 
                    setValues({...values,[e.target.name]: e.target.value})
                }
            />
            <br />
            <input
                placeholder='Enter your email'
                name="email"
                onChange={(e) =>
                    setValues({...values, [e.target.name]: e.target.value})
                }
                />

            <input type="submit" />
        </form>
      
    </div>
  )
}

export default Create
