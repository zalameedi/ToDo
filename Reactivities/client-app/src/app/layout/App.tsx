import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Button, Container, Header, List } from 'semantic-ui-react';
import { ToDoTask } from './models/todotask';
import NavBar from './NavBar';
import ToDoTaskDashboard from '../../features/todotasks/dashboard/ToDoTaskDashBoard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';

function App() {
  const [todotasks, setToDoTasks] = useState<ToDoTask[]>([]);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => { //what to do when app loads up (react hook)
    //axios.get<ToDoTask[]>('http://localhost:5001/api/todotasks').then(response => {
      agent.ToDoTasks.list().then(response => {
      console.log(response); //debugging purposes

      let todotasks: ToDoTask[] = []; //my middleware approach
      response.forEach(todotask => {
        todotask.date = todotask.date.split('T')[0]
        todotasks.push(todotask)
      })
      setToDoTasks(todotasks)
    })
  }, [])

  function handleFormOpen(id?: string)
  {
    setEditMode(true);
  }

  function handleFormClose()
  {
    setEditMode(false);
  }

  function handleCreateActivity(todotask: ToDoTask)
  {
    //todotask.id ? setToDoTasks([]) NOTE: TODO: ADD EDIT
    todotask.id = uuid();
    agent.ToDoTasks.create(todotask).then(() => 
    {
      setToDoTasks([...todotasks, todotask]);
      setEditMode(false);
    })
  }

  function handleDeleteToDoTask(id: string)
  {
    agent.ToDoTasks.delete(id).then(() => 
    {
      setToDoTasks([...todotasks.filter(x => x.id != id)]);
    })
  }

  return (
    <div className="App">
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ToDoTaskDashboard 
        todotasks={todotasks} 
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        create={handleCreateActivity}
        deleteToDoTask={handleDeleteToDoTask}
        />
      </Container>
    </div>
  );
}

export default App;
