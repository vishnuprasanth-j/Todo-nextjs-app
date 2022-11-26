import React from 'react'

const TodoList = (props) => {
const{edit,setEdit,data,handleEdit,id,edittedValue,setEdittedValue,handleupdateTodo,handledeleteTodo}=props

  return (
    <li className='shadow-md bg-inherit border-2 border-solid border-white flex flex-row p-2 items-center mb-2'>
           {
            edit === id ? <><input type='text'  className='bg-inherit outline-none text-2xl flex-1' value={edittedValue} onChange={(e)=>setEdittedValue(e.target.value)}></input><i id={id}  onClick={(e)=>{handleupdateTodo(e.target.id,edittedValue);setEdit()}} className="fa-sharp fa-solid fa-check duration-300 hover:scale-125 cursor-pointer text-2xl"></i></>:
           <><span className='text-2xl flex-1'>{data.text}</span>
           <div>
           <i  id={data.id} className="fa-solid fa-pen m-2 duration-300 hover:rotate-45  cursor-pointer" onClick={(e)=>handleEdit(id)} ></i>
           <i id={data.id} className="fa-solid fa-trash m-2  duration-300 hover:scale-125 cursor-pointer"  onClick={(e)=>handledeleteTodo(e.target.id)}></i>
           </div>
          </> 
           } 
    </li>
  )
}

export default TodoList

