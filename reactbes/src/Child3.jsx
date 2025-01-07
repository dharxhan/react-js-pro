import React,{useContext} from 'react';
import {data1,data2} from './App';

const Child3 = () => {
    const name = useContext(data1);
    const place = useContext(data2);

    return (
        <div>
            <h1>My name is {name}and place is {place}{" "}</h1>
        </div>
    )
}