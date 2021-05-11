import React, { useState } from 'react';

interface Props {
    text: string,
    id: number
}

const List: React.FC<Props> = ({ text, id }) => {
    const [doneClass, setClass] = useState('');

    return (
        <li key={id}>
            <span className={doneClass}>{text}</span>
            <div className="done" onClick={() => setClass('cut')}>done</div>
        </li>
    )
}

export default List;