import React, {useState} from 'react';
import {TodoCreateContainer, CircleButton, InsertFormPositioner, InsertForm, Input } from './styles';
import {MdAdd} from "react-icons/md";

const TodoCreate = () => {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return(
        <TodoCreateContainer>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input autoFocus placeholder='입력 후, Enter를 누르세요.' />
                    </InsertForm>
                </InsertFormPositioner>
            )}

        <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
        </CircleButton>
        </TodoCreateContainer>
    );
};

export default TodoCreate;