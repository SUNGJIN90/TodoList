import React from 'react';
import {TodoListContainer} from './styles';
import TodoItem from "../TodoItem";

const TodoList = () => {
    return (
        <TodoListContainer>
            <TodoItem text="프로젝트1" done={true}></TodoItem>
            <TodoItem text="프로젝트2" done={true}></TodoItem>
            <TodoItem text="프로젝트3" done={false}></TodoItem>
        </TodoListContainer>
    );
};

export default TodoList;