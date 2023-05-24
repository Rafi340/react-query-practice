import {useSuperFakeHerosData } from '../hooks/useSuperFakeHerosData';
import { Link } from 'react-router-dom';
export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {}
  const onError = (error) => {}
const {isLoading , isFetched , data, isError , error } =  useSuperFakeHerosData(onSuccess,onError);
 if(isLoading ) return <h2>Loading...</h2>
  return <>
  <h2>Super Fake hero</h2>
  {
  data?.data.map(hero => 
  <div key={hero.id}>
   <Link to={`/rq-super-heros/${hero.id}`}> {hero.label} </Link>
    </div>
  )
  }
  </>
}
