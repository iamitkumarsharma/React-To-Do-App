import React, { useState, useEffect} from 'react';
import "./App.css";
import { Button ,Input, Card, FormControl, InputLabel } from "@material-ui/core";
import Todos from './Todos';
import db from './Firebase';
import firebase from 'firebase';






function App() {
  const [todos, setTodos] = useState([ ]);
  const [input, setInput] = useState([]);
  
  useEffect(()=>{
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
        setTodos(snapshot.docs.map(doc=>({id:doc.id , todo:doc.data().todo})))
      })
  },[]);   //listene one when app load

  const inputHandler=(event) => {
    setTodos([...todos,input]);
    setInput('')
    event.preventDefault();
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
   
  

  return (
    <Card className="app">
      <h1>Todo List</h1>
      <div className="app_fields">
        <FormControl>
        <InputLabel >✔️ Add Todo</InputLabel>
        <Input value ={input} onChange={(event)=>setInput(event.target.value)} />
        
        </FormControl>

        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={inputHandler}>ADD</Button>
      </div>

      
      <ul>
      {todos.map(newTodo=>(
          <Todos todo={newTodo} ></Todos>
          
        ))}
        </ul>  
        
      

    </Card>

  );
}

export default App;
