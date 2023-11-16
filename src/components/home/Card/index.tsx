import React from 'react'
import { cardType } from '../../../utils/type'

const Card:React.FC<{data:cardType}> = ({data}) => {
  console.log(data)
  return (
    <div className='w-full rounded-md shadow-xl hover:scale-[1.1] cursor-pointer transition-all duration-500 h-fit'>
    <div className='w-full bg-gray-200 p-3 rounded-md rounded-b-none'>
        <img className='w-full rounded-md h-56 md:h-80 lg:h-48 xl:h-60 2xl:h-96' src={data?.imageUrl??"https://picsum.photos/200/300"}/>
        <div className='flex flex-col gap-2 py-3 2xl:py-5 pb-0'>
            <h1 className='font-semibold text-sm md:text-lg 2xl:text-3xl truncate'>{data?.name??"no name"}</h1>
            <p className='text-gray-800 text-xs md:text-sm 2xl:text-xl line-clamp-2'>{data?.originalText??"Lorem ipsum dolor sit, amet consectetur adipisicing elit."}</p>
        </div>
    </div>
    <div className='flex flex-col text-xs md:text-sm 2xl:text-2xl'>
        <p className='py-3 2xl:py-6 px-3 bg-white border-b border-gray-200 truncate'>{data?.originalType??"lorem Ipsum"}</p>
        <p className='py-3 2xl:py-6 px-3 bg-white border-b border-gray-200 truncate'>{data?.type??"lorem Ipsum"}</p>
    </div>
    </div>
  )
}

export default Card