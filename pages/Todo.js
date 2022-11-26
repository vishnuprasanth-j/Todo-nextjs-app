import React from 'react'
import useAuth from '../hooks/useAuth'
import { addTodo,deleteTodo,updateTodo } from '../api/todoapi'
import { collection, onSnapshot, query, where ,getDoc, DocumentSnapshot} from "firebase/firestore";
import { db } from "../firebase";

import TodoList from '../components/TodoList';
import { async } from '@firebase/util';

const Todo = () => {
    const[todo,settodo]=React.useState()
    const [todos, setTodos] = React.useState([]);
    const{user,isLoggedIn}=useAuth()
    const[edit,setEdit]=React.useState("")
    const [edittedValue, setEdittedValue] = React.useState('')

    const handleAddtodo=async()=>{
        
       if (!isLoggedIn) {
      
        return;
      }
      const data = {
        todo,
        userId: user.uid,
      };
      settodo("");
      await addTodo(data);
    
 
    }

    const refreshData =async () => {
        if (!user) {
        setTodos([])
          return;
        }
        const q = query(collection(db, "todo"), where("user", "==", user.uid));

        onSnapshot(q, (querySnapchot) => {
          let ar = [];
           querySnapchot.docs.forEach((doc) => {
           ar.push({ id: doc.id, ...doc.data() });
                                               });
          setTodos(ar);
                                          });
                                    };
    
      React.useEffect(() => {
        refreshData();
      }, [user]);

const handleEdit=(Key)=> {
            setEdit(Key)
            let curr=todos.find(item => item.id === Key);
            setEdittedValue(curr.text)
    }

const handledeleteTodo=async(id)=>{
  await deleteTodo(id)
}

const hanldeKeypress=(e)=>{if(e.charCode==13){handleAddtodo()}}
const handleupdateTodo=async(id,newvalue)=>{
await updateTodo(id,newvalue)
}
  return (
    <div className='w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-10'>


<div className='flex items-stretch'>
<input onKeyPress={(e)=>hanldeKeypress(e) } className='outline-none p-3 text-base sm:text-lg text-slate-900 flex-1' type="text" value={todo} onChange={(e)=>settodo(e.target.value)}></input>
<button className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white font-medium text-base duration-300 hover:opacity-40'  onClick={handleAddtodo}>Add</button>
            </div>
        
      
        <ul>
        {
            todos?todos.map((i,index)=>{
            return <TodoList handleupdateTodo={handleupdateTodo} handledeleteTodo={handledeleteTodo} key={i.id} edit={edit} handleEdit={handleEdit}   setEdittedValue={setEdittedValue} edittedValue={edittedValue} setEdit={setEdit} id={i.id} data={i}/>
            }):null
        }
        </ul>
     
    </div>
  )
}

export default Todo