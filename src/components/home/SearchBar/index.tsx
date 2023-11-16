import React from 'react'
import { cardType } from '../../../utils/type';

interface prosType {
  search: string;
  setSearch: (arg: string) => void
  setIsLoading: (arg: boolean) => void
  setData: (arg: cardType[]) => void
}

const SearchBar: React.FC<prosType> = ({ search, setSearch, setIsLoading, setData }) => {
  return (
    <input className='py-2 w-3/6 md:w-2/6 lg:w-1/6 outline-none transition-all duration-500 focus:shadow-lg focus:border-blue-500 px-2 border rounded-md text-sm' placeholder='Search by name' value={search} onChange={e => {
       setSearch(e.target.value) ;
       setIsLoading(true);
       setData([])
    }} />
  )
}

export default SearchBar