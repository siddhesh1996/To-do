import React, { useRef } from 'react';

interface Props {
    Txtvalue: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<Props> = ({Txtvalue, handleChange}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef} className="inputbox">
            <input type="text" value={Txtvalue} onChange={handleChange} ref={inputRef}/>
        </div>
    )
}

export default TextField;