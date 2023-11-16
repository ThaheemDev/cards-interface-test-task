import React, { useState, useEffect } from 'react';
import SearchBar from './components/home/SearchBar';
import Card from './components/home/Card';
import http from './utils/http';
import { cardType } from './utils/type';
import { PulseLoader } from 'react-spinners';
import axios, { CancelToken } from 'axios';

function App() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<cardType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [cancleToken, setToken] = useState<CancelToken| any>(undefined)
  const [total,setTotal] = useState(0)

  const fetchCards = (page: number = 1, isSearched = false) => {
    setPage(page);
    if(cancleToken){
      cancleToken.cancel();
    }

    const source = axios.CancelToken.source();
    setToken(source);
    http.get(`/cards?page=${page}&pageSize=12${search ? `&name=${search}` : ""}`,{
      cancelToken:source.token
    }).then(({ data,headers }) => {
      debugger;
      setData((prev) => (isSearched ? data.cards : [...prev, ...data.cards])); 
      setTotal( headers["total-count"]   ??0     );
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setIsLoading(false)

    })

  }

    useEffect(() => {
      fetchCards(page, true);

    }, [search])

    return (
      <main id='main' className="w-full pb-10">
        <div className='w-full flex flex-col gap-y-5'>
          <div className='w-full flex justify-end items-center gap-x-3 z-10 bg-gray-200 px-5 py-2 fixed'>
            <p className='text-sm text-gray-400'>{`${data.length}/${total}`}</p>
            <SearchBar {...{ search, setSearch, setIsLoading, setData }} />
          </div>
          {data.length > 0  &&
            <div className='pt-20 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4 md:px-8 lg:px-5 xl:px-8 gap-4 gap-y-8'>
              {data?.map(card => (
                <Card key={"çards--" + card.id} data={card} />
              ))}
            </div> 
             

          }



          {data.length != total &&(isLoading ? <div className='flex justify-center py-3'><PulseLoader color="gray" /></div>
            :
            <div className="btn flex justify-center pt-20">
              <button className='text-gray-900 transition-all duration-500 hover:bg-black hover:bg-opacity-20 py-3 px-6 rounded-lg bg-gray-200 font-semibold' onClick={() => {
                fetchCards(page + 1);
                setIsLoading(true)
              }} >More...</button>
            </div>)
          }
        </div>
      </main>
    );
  }

  export default App;
