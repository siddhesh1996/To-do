import React, { useState } from 'react';

interface Props {
    addToDo: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Button: React.FC<Props> = ({ addToDo }) => {
    return <div onClick={addToDo} className="addBtn"><span>Add</span></div>
}


export default Button;