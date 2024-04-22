import React, { useState } from 'react'
import Card from './Card'
import { data } from '../utils/Data';
import Search from './Search';
function Main() {
  const [resetdata,setresetdata]=useState("");
  const dataval = data;
  const store = dataval.map((ele)=>{return <Card val={ele}/>})
  return (
    <div class="flex justify-around flex-wrap mt-6 p-8"> 
        {store}
    </div>
  )
}

export default Main