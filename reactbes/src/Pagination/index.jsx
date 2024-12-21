import React,{useState} from 'react';


const index = () => {
    const recordPerPage = 10;
    const [data, setData] = useState([

    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const TotalPages = Math.ceil(data.length / recordPerPage);

    function getRecords() {
        const FirstIndex = (currentPage - 1) * recordPerPage;
        const LastIndex = FirstIndex + recordPerPage;
        const currentRecords = data.slice(FirstIndex, LastIndex);
        return currentRecords;
    }

  return (
    <div>
      {getRecords().map((item, index) => {
        returun(
            <div key={index}>
                <p>{item.name}</p>
            </div>
        )
      })}

      <button onClick={()=> setCurrentPage((prev)=> prev -1 )}>Prev</button>
      {currentPage} 
      <button onClick={()=> setCurrentPage((prev)=> prev + 1 )}>Next</button>
    </div>
  )
}

export default index
