"use client"
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {increment, decrement} from '@/redux/features/counterSlice'
function HomePage() {
  const count = useAppSelector (state => state.counterReducer.counter)
  const dispatch = useAppDispatch()
  return (
    <div className='bg-gray-400 w-1/2 mx-auto p-5 text-center'>
        <h1 className='text-xl font-bold'>Tolal: {count}</h1>
        <button className='bg-blue-500 px-3 py-2 rounded-2xl mr-4' onClick={()=>{
          dispatch(increment())
        }}>Increment</button>
        <button className='bg-green-500 px-3 py-2 rounded-2xl' onClick={()=>{
          dispatch(decrement())
        }} >Decrement</button>
    </div>
  )
}

export default HomePage