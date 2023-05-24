import axios from 'axios';
import React, { useState } from 'react'
import {useQuery}  from 'react-query';
const fetchDistrict = (pageNumber) => {
        return axios.get(`http://localhost:4000/superheroes?_limit=10&_page=${pageNumber}`);
    
}
const RQPaginated = () => {
const [pageNumber, setpageNumber] = useState(1);
   const {data , isLoading} = useQuery( ["paginated", pageNumber],()=>
   fetchDistrict(pageNumber),
   {
    keepPreviousData: true
   });
   if(isLoading)
   {
    return <h2>Loading..........</h2>
   }
  return (
    <>
    {
        data?.data.map(t=> <>
        <h2>{t.id}. {t.label}</h2>
        </>)
    }
    <button onClick={()=> setpageNumber((prev)=> prev - 1)}
    disabled={pageNumber === 1}>Prev Page</button>
    <button onClick={()=> setpageNumber((prev)=> prev +1)}>Next Page</button>
    </>
  )
}

export default RQPaginated