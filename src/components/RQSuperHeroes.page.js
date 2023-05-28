import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEntryData, useSuperFakeHerosData } from '../hooks/useSuperFakeHerosData';
export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {}
  const onError = (error) => {}
  const [division_id, setDivision_id] = useState('');
  console.log(division_id)
  const [district_id, setDistrict_id] = useState('');
  const [upazila, setUpazila] = useState('');
  const [postOffice, setPostOffice] = useState('');
  const [postCode, setPostCode] = useState('');
  const [label, setLabel] = useState('');
const {isLoading , data, isError , error,refetch } =  useSuperFakeHerosData(onSuccess,onError);
const {mutate: entryInfo} = useEntryData();
const dataentry = () => {
  const add = {division_id,district_id, upazila,postOffice,postCode,label};
  entryInfo(add);
}
 if(isLoading ) return <h2>Loading...</h2>
  return <>
  <h2>Super Fake hero</h2>
  <div className='row'>
    <input type='text'
    label="division"
    value={division_id}
    onChange={(e)=> setDivision_id(e.target.value)}/>

<input type='text'
  label="district"
    value={district_id}
    onChange={(e)=> setDistrict_id(e.target.value)}/>

<input type='text'
label="upazila"
    value={upazila}
    onChange={(e)=> setUpazila(e.target.value)}/>

<input type='text'
label="PostOffice"
    value={postOffice}
    onChange={(e)=> setPostOffice(e.target.value)}/>

<input type='text'
label="PostOffice"
    value={postCode}
    onChange={(e)=> setPostCode(e.target.value)}/>

<input type='text'
label="label"
    value={label}
    onChange={(e)=> setLabel(e.target.value)}/>

<button onClick={dataentry}>Add New</button>

  </div>
  {
  data?.data.map(hero => 
  <div key={hero.id}>
   <Link to={`/rq-super-heros/${hero.id}`}> {hero.label} </Link>
    </div>
  )
  }
  </>
}
