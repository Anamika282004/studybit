import React, { useState } from 'react'
import Card from './Card'
import { data } from '../utils/Data';
function Main() {
  const [resetdata,setresetdata]=useState('');
  const [dataval,setdataval] = useState(data);
  const [copyval,setcopyval] = useState(data);
  const store = copyval.map((ele)=>{return <Card val={ele}/>})
  const search = (event)=>{
      event.preventDefault();
      const filter = dataval.filter((e)=>{return e.key.toLowerCase().includes(resetdata.toLowerCase())})
      console.log(filter);
      setcopyval(filter);
}
  return (
   <>
    <div>
        <form class="max-w-md mx-auto m-10">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-600 dark:focus:border-gray-900" value={resetdata}
                onChange={(change)=>{const val = change.target.value;
                 setresetdata(val);
                }} 
                placeholder="Search Courses,Community..." required />
                <button type="submit" onClick={search} class="text-white absolute end-2.5 bottom-2.5 bg-gray-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-400 dark:focus:ring-gray-600">Search</button>
            </div>
        </form>
         </div>
        <div class="flex justify-around flex-wrap mt-6 p-8"> 
            {store}
        </div>
   </>
  )
}

export default Main