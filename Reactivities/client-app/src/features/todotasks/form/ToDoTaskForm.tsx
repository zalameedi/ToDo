import React from 'react';
import { Button, Form, FormInput, Segment } from 'semantic-ui-react';

export default function ToDoTaskForm()
{
    return(
        <Segment clearing>
            <Form>
                <Form.Input placeHolder='Title' />
                <Form.Input placeHolder='Description' />
                <Form.Input placeHolder='Date' />
                <Button floated='right' positive type='submit' context='Submit'/>
                <Button floated='right' type='button' context='Cancel'/>
            </Form>
        </Segment>
    )
}