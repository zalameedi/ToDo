import React from "react";
import { Grid, List } from "semantic-ui-react";
import { ToDoTask } from "../../../app/layout/models/todotask";
import ToDoTaskForm from "../form/ToDoTaskForm";
import ToDoTaskList from "./ToDoTaskList";

interface Props{
    todotasks: ToDoTask[];
  }  

export default function ToDoTaskDashboard({todotasks}: Props)
{
    return(
    <Grid>
        <Grid.Column width='10'>
            <ToDoTaskList todotasks={todotasks}/>
        </Grid.Column>
        <ToDoTaskForm/>
    </Grid>
    )
}