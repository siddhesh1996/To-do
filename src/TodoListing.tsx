import React, { useState } from 'react';
import List from './List';

type IData = {
    text: string,
    id: number,
}

interface Props {
    list: Array<IData>
}

const ToDoList: React.FC<Props> = ({ list }) => {
    return (<ul>
        {
            list.map(({ text, id }) => {
                let sID = id.toString();
                return <List text={text} id={id} />
            })
        }
    </ul>)
}

export default ToDoList;