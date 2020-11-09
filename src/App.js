import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
    const size = 5;
    const [freeSpace, setFreeSpace] = useState(true);
    const [entries, setEntries] = useState('');
    const [possibilities, setPossibilities] = useState([]);

    const setBingoEntries = () => {
        const lines = entries.split('\n');
        if (lines.length < 25) {
            alert('not enough items - minimum 25 items required');
            return;
        }

        setPossibilities(lines);
    };

    return (
        <div className='App'>
            {possibilities.length >= 25 ? <Card size={size} freeSpace={freeSpace} entries={possibilities} /> : null}
            <div className='App-options'>
                <div>
                    <input type='checkbox' checked={freeSpace} onChange={() => setFreeSpace(!freeSpace)} /> Free Space
                </div>
                <div>
                    <div>Possibilities (min 25)</div>
                    <textarea className='App-possibilities' value={entries} onChange={e => setEntries(e.target.value)} />
                </div>
                <div>
                    <button onClick={setBingoEntries}>Generate</button>
                </div>
            </div>
        </div>
    );
}

export default App;
