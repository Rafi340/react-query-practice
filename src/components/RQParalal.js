
import axios from 'axios';
import { useQuery } from 'react-query';
const fetchLowHero = () => {
    return axios.get('http://localhost:4000/superheroes');
  };
const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}
export const RQParalal = () => {
   const {data : fakeheros} = useQuery('super-heroes', fetchLowHero);
   const {data: friends} =  useQuery('friends', fetchFriends);
  return (
    <div>RQParalal</div>
  )
}
