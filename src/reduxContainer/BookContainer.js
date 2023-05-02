import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import purchase_book from "./BookActions"

function BookContainer() {
 const noOfBooks=useSelector(state=>state.NumberOfBooks)
const dispatch=useDispatch()
  return (
    <>
    <div>BookContainer</div>
    <h2>No of Books-{noOfBooks}</h2>
    <button onClick={()=>(dispatch(purchase_book()))}>Buy Book</button>
    </>
  )
}

export default BookContainer