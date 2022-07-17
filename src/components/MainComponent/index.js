import React from 'react';
import {MainContainer} from './styles';
import Header from "layouts/Header";
import TodoList from "../TodoList";
import TodoCreate from "../TodoCreate";

const MainComponent = () => {
    return (
        <MainContainer>
            <Header/>
            <TodoList />
            <TodoCreate />
        </MainContainer>
    );
};

export default MainComponent;