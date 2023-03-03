import React from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { ToDoTask } from "../../../app/layout/models/todotask";

interface Props {
    todotasks: ToDoTask[];
    deleteToDoTask: (id: string) => void;
}

export default function ToDoTaskList({todotasks, deleteToDoTask}: Props)
{
    return(
        <Segment>
            <Item.Group divided>
                {todotasks.map(todotask => (
                    <Item key={todotask.id}>
                        <Item.Content>
                            <Item.Header as='a'>{todotask.title}</Item.Header>
                            <Item.Meta>{todotask.date}</Item.Meta>
                            <Item.Description>{todotask.description}</Item.Description>
                            <Item.Extra>
                                <Button onClick={() => deleteToDoTask(todotask.id)} floated='right' content='Complete' color='red' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>

    )
}