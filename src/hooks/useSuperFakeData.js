import { useQuery, useQueryClient } from "react-query";
import axios from 'axios';
const fetchSuperFakeHero = ({queryKey}) => {
    const id = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${id}`);
}
export const useSuperFakeData = (id )=> {
   const queryClient = useQueryClient();
   return useQuery(['super-hero', id], fetchSuperFakeHero,
   {
    initialData: () => {
        const district = queryClient.getQueriesData('super-hero')?.data?.find(d => d.id === parseInt(id));
        if(district)
        {
            return {
                data: district
            }
        }else{
            return undefined;
        }
    }
   }); 
};