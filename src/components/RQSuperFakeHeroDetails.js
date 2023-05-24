import React from 'react'
import { useParams } from 'react-router-dom';
import {useSuperFakeData} from '../hooks/useSuperFakeData';
export const RQSuperFakeHeroDetails = () => {
    const {id} = useParams();
    const { data , isLoading } = useSuperFakeData(id);
    const code = data?.data;
    if(isLoading) return <h2>Loading...</h2>
  return (
    <>
        <h2>Super Fake Hero Details</h2>
       <p> {code?.label} - {code?.postCode} </p>
    </>
  )
}
