import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Button, Container, Header, List } from 'semantic-ui-react';
import { ToDoTask } from './models/todotask';
import NavBar from './NavBar';
import ToDoTaskDashboard from '../../features/todotasks/dashboard/ToDoTaskDashBoard';


function App() {
  const [todotasks, setToDoTasks] = useState<ToDoTask[]>([]);
  useEffect(() => { //what to do when app loads up (react hook)
    axios.get<ToDoTask[]>('http://localhost:5001/api/todotasks').then(response => {
      console.log(response); //debugging purposes
      setToDoTasks(response.data)
    })
  }, [])


  return (
    <div className="App">
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <ToDoTaskDashboard todotasks={todotasks} />
      </Container>
    </div>
  );
}

export default App;
