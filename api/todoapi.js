import { db } from "../firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,updateDoc
} from "firebase/firestore";


const addTodo = async ({ userId,todo}) => {
  try {
    await addDoc(collection(db, "todo"), {
      text:todo,
      user: userId,
      createdAt: new Date().getTime(),
    });
  } catch (err) {}
};
const updateTodo=async(docId,newvalue)=>{
  try{
    let text = newvalue
    const todoRef = doc(db, "todo", docId);
    await updateDoc(todoRef, {
      text,
    });

  }catch(err){
    return err
  }
}

const deleteTodo = async (docId) => {
  try {
    const todoRef = doc(db, "todo", docId);
    await deleteDoc(todoRef);
  } catch (err) {
    console.log(err);
  }
};

export { addTodo, deleteTodo,updateTodo };
