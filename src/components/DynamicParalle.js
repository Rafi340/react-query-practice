import axios from 'axios';
import { useQueries } from 'react-query';

const fetchLowHero = (id) => {
    return axios.get(`http://localhost:4000/superheroes/${id}`);
  }

export const DynamicParalle = ({id}) => {
    const queries = useQueries(id.map(id => {
        return {
            queryKey: ['super-hero', id],
            queryFn: () => fetchLowHero(id)
        }
    }))
    console.log(queries);
  return (
    <div>DynamicParalle</div>
  )
}
