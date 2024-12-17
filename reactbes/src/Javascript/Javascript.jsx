import React from 'react';

const Javascript = () => {
    function handleClick(){
        alert("Hello, World");
    }

    function handleKeyUp() {
        let body= document.body;
        body.style.backgroundColor = "lightblue";
    }

    return(
        <div>
            <button onClick={handleClick}>Click</button>
            <button id="btn2" onClick={handleKeyUp}>KeyUP</button>
        </div>
    )
}
export default Javascript