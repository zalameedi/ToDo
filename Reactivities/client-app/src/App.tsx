import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';


function App() {
  const [todotasks, setToDoTasks] = useState([]);
  useEffect(() => { //what to do when app loads up (react hook)
    axios.get('http://localhost:5001/api/todotasks').then(response => {
      console.log(response); //debugging purposes
      setToDoTasks(response.data)
    })
  }, [])


  return (
    <div className="App">
      <Header as='h2' icon='tasks' content='ToDoTasks' />
        <List>
          {todotasks.map((todotask: any) => (
            <List.Item key={todotask.id}>
              {todotask.title}
            </List.Item>
          ))}
        </List>
        <Button>Create New Task</Button>
    </div>
  );
}

export default App;
