import React from 'react'
import { useGetNewsQuery } from '../../../redux/api/newsApi2'

const News = () => {

    const {data} =  useGetNewsQuery()

    console.log(data)
  return (
   <section className=" ">
     <div className=" mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-[#2c3e57] mb-6 underline decoration-blue-500"> Latest News by Redux</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {data?.map((post,index) => (
          <li
            key={post?.id}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
          > <h1 className="text-blue-600 font-semibold">{index+1}</h1>
            <h3 className="text-lg font-semibold text-[#2c3e57] mb-2 hover:text-blue-600 transition">{post?.title}</h3>
            <p className="text-gray-700">{post?.description}</p>
          </li>
        ))}
      </div>
    </div>
   </section>
  )
}

export default News