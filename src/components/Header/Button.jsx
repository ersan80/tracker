import React,{useState} from 'react'
import AddTask from '../AddTask'

const Button = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button className='btn btn-danger' onClick={() => setShow(!show)}>{show ? "Show Add Task Bar" : "Close Add Task Bar"}</button>
       {!show && <AddTask />} 
    </div>
  )
}

export default Button