import React, { ChangeEvent, useState } from 'react';
import { Button, Form, FormInput, Segment } from 'semantic-ui-react';
import { ToDoTask } from '../../../app/layout/models/todotask';

interface Props{
    todotask: ToDoTask | undefined;
    closeForm: () => void;
    create: (todotask: ToDoTask) => void;
}

export default function ToDoTaskForm({todotask: selectedToDoTask, closeForm, create}: Props)
{
    const initialState = selectedToDoTask ?? {
        id: '',
        title: '',
        description: '',
        date: ''
    }

    const[todotask, setToDoTask] = useState(initialState);
    function handleSubmit()
    {
        create(todotask)
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>)
    {
        const{name, value} = event.target; //tracking value and name in property
        setToDoTask({...todotask, [name]: value}) //maps name to value
    }
    
    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autocomplete='off'>
                <Form.Input label="Title" placeHolder='Title' value={todotask.title} name='title' onChange={handleInputChange} />
                <Form.Input label="Description" placeHolder='Description' value={todotask.description} name='description' onChange={handleInputChange} />
                <Form.Input label="Date" placeHolder="Date" value={todotask.date} name='date' onChange={handleInputChange} />
                <Button floated='right' label='Submit' positive type='submit' context='Submit'/>
            </Form>
        </Segment>
    )
}