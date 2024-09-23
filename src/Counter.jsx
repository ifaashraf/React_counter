import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,addValue } from './redux/countSlice'

function Counter() {

  const [val,setVal]=useState(0)
  const {count}=useSelector((state)=>state.counterReducer)
  console.log(count)

  const dispatch=useDispatch()
  return (
   <>
    <div className='w-75 p-3 border shadow border-light'>
        <h2 className='text-center text-danger mb-2'>Counter</h2>
         <h4 className='text-light text-center'>{count}</h4>
        <div className='p-3 my-2 d-flex justify-content-around'>
            <button className='btn btn-success' onClick={()=>{dispatch(increment())}}>+ increase</button>
            <button className='btn btn-info'  onClick={()=>{dispatch(reset())}}>Reset</button>
            <button className='btn btn-danger'  onClick={()=>{dispatch(decrement())}}>- decrease</button>
        </div>
        <div className='d-flex mt-3'>
            <input type="number" onChange={(e)=>{setVal(Number(e.target.value))}} className='form-control' />
            <button className='btn btn-info w-8' onClick={()=>dispatch(addValue(val))}>submit</button>
        </div>
    </div>
    </>
  )
}

export default Counter