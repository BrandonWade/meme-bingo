import React, { useState } from 'react';

const Square = ({ text }) => {
    const [marked, setMarked] = useState(false);
    return (
        <td className='Square' onClick={() => setMarked(!marked)}>
            <div className='Square-content'>
                {text}
                {marked ? <span className='Square-mark' /> : null}
            </div>
        </td>
    );
};

export default Square;
