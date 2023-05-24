import { useQuery } from "react-query";
import axios from "axios";

const fetchLowHero = () => {
    return axios.get('http://localhost:4000/superheroes');
  };
export const useSuperFakeHerosData = (onSuccess,onError) => {
    return useQuery("super-heroes", fetchLowHero,{
        onSuccess,
        onError/* ,
        select: (data) => {
            const heroname = data.data.map(hero => hero.name);
            return heroname;
        } */
    },);
}