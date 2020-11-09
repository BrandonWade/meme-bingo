import React, { useState } from 'react';

const Square = ({ text }) => {
    const [marked, setMarked] = useState(false);
    return (
        <td className={`Square ${marked ? 'Square-marked' : ''}`} onClick={() => setMarked(!marked)}>
            {text}
        </td>
    );
};

export default Square;
