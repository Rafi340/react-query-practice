import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchLowHero = () => {
    return axios.get('http://localhost:4000/superheroes');
  };
  const useAddData = (info) => {
    return axios.post('http://localhost:4000/superheroes',info);
  }
export const useSuperFakeHerosData = (onSuccess,onError) => {
    return useQuery("super-heroes", fetchLowHero,{
        onSuccess,
        onError/* ,
        select: (data) => {
            const heroname = data.data.map(hero => hero.name);
            return heroname;
        } */,

    },);
}
export const useEntryData = () => {
    const queryClient = useQueryClient();
    return useMutation(useAddData,
        {
            onSuccess: (data)=> {
                queryClient.setQueryData("super-heroes",(oldQueryData)=> {

                    return {
                        ...oldQueryData,
                        data: [data.data,...oldQueryData.data]
                    }
                })
            }
        })
}