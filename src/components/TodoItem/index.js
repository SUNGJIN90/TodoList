import React from 'react';
import {MdDone, MdDelete} from "react-icons/md";
import {TodoItemContainer, CircleItem, TextItem, Remove} from './styles';

const TodoItem = ({ done, text }) => {
    return (
        <TodoItemContainer>
            <CircleItem done={done}>{done && <MdDone />}</CircleItem>
            <TextItem done={done}>{text}</TextItem>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemContainer>
    );
};

export default TodoItem;