import React, {useEffect, useState} from 'react'
import axios from 'axios';


const Edit = () => {
    const {id} = useParams();
    const [values, setValues] = useState({name:"", email: ""});

    useEffect(() => {
        axios.get("http://localhost:3000/users" +id).then((res) => {
        
            console.log(res.data);
            setValues(res.data);
        });
    },[data]);

    const navigate = useNavigate();

    function handleCreate(e){
        e.preventDefault();
        axios.put("http://localhost:3000/users/", values)
        .then((res) =>
            console.log(res.data));
     Navigate("/");
//use create file not home

    }
  return (
    <div className='Edit'>
        <nav>
            <h1>Crud App</h1>
            <button>Add+</button>
        </nav>
        <br />
        <center>
            <table width={"80%"} border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link to={`/read/${item.id}`}>
                                    <button>Edit</button>
                                    </Link>

                                    <button onClick={{} => handleDelete(item.id)}>
                                    Delete
                                    </button>
                                </td>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </center>
    </div>
  )
}

export default Edit
