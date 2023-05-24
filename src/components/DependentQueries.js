import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

const fetchFriend = (email) => {
  return axios.get(`http://localhost:4000/friends/${email}`);
}
const fetchDetails = (id) => {
  return axios.get(`http://localhost:4000/details/${id}`)
}
export const DependentQueries = ({email}) => {
 const {data : friends} = useQuery(["friends" , email] ,()=> fetchFriend(email))
 console.log(friends)
 const id = friends?.data?.detailsId;

 useQuery(["details", id],()=> fetchDetails(id),
 {
  enabled: !!id
 })
  return (
    <div>DependentQueries</div>
  )
}
