import React from 'react';
import { Button, Form, FormInput, Segment } from 'semantic-ui-react';
import { ToDoTask } from '../../../app/layout/models/todotask';

interface Props{
    todotask: ToDoTask | undefined;
    closeForm: () => void;
}

export default function ToDoTaskForm({todotask, closeForm}: Props)
{
    return(
        <Segment clearing>
            <Form>
                <Form.Input label="Title" placeHolder='Title' />
                <Form.Input label="Description" placeHolder='Description' />
                <Form.Input label="Date" placeHolder="Date" />
                <Button floated='right' label='Submit' positive type='submit' context='Submit'/>
            </Form>
        </Segment>
    )
}