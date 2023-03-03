import React from "react";
import { Grid, List } from "semantic-ui-react";
import { ToDoTask } from "../../../app/layout/models/todotask";
import ToDoTaskForm from "../form/ToDoTaskForm";
import ToDoTaskList from "./ToDoTaskList";

interface Props{
    todotasks: ToDoTask[];
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
  }  

export default function ToDoTaskDashboard({todotasks, editMode, openForm, closeForm}: Props)
{
    return(
    <Grid>
        <Grid.Column width='10'>
            <ToDoTaskList 
            todotasks={todotasks}/>
        </Grid.Column>
        {editMode &&
        <ToDoTaskForm closeForm={closeForm} todotask={undefined} />}
    </Grid>
    )
}