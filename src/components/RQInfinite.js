import axios from 'axios';
import {useInfiniteQuery}  from 'react-query';
const fetchDistrict = ({pageParam = 1}) => {
        return axios.get(`http://localhost:4000/superheroes?_limit=10&_page=${pageParam}`);
    
}
export const RQInfinite = () => {
   const {data , isLoading , hasNextPage , fetchNextPage, isFetching, isFetchingNextPage} = useInfiniteQuery( ["paginated"],
   fetchDistrict,
   {
    getNextPageParam: (_lastPage, pages) => {
        if(pages.length < 134)
        {
            return pages.length +1;
        }else {
            return undefined;
        }
    }
   });
   if(isLoading)
   {
    return <h2>Loading..........</h2>
   }
  return (
    <>
    {
        data?.pages.map((t , i)=> {
            return(
            <div key={i}>
                {
                    t.data.map((dis, i) => (
                        <h2 key={dis.id}>{i+1} - {dis.label}</h2>
                    ))
                }
            </div>
            )
        })
    }

    <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
    <div>{isFetching && !isFetchingNextPage ? 'fetching...': null}</div>
    </>
  )
};