import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props{
    openForm: () => void;
}

export default function NavBar({openForm} : Props)
{
    return (
        <Menu inverted fixed ='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
                    ToDoTasks
                </Menu.Item>
                <Menu.Item name='Tasks' />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Task'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}