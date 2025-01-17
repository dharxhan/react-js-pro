import React, {useEffect, useState} from 'react'
import axios from 'axios';


const Home = () => {
    const [data, setData]= useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/employee").then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    },[data]);

    function handleDelete(id){
        axios
        .delete("http://localhost:3000/users/"+id)
        .then((res) =>
            console.log(res.data));
     Navigate("/");

    }
  return (
    <div className='Home'>
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

export default Home
