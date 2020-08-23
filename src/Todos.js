import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import db  from "./Firebase"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './App.css'
const date = new Date().toLocaleDateString();

function Todos(props) {
    
    
       return (
         
           <List>
             <ListItem>
               <ListItemText
                 primary={props.todo.todo}
                 secondary={date}
               ></ListItemText>
               <DeleteForeverIcon  color="secondary"  onClick={ event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
               
             </ListItem>
             
           </List>
         
       );
}

export default Todos
