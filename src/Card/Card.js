import React from 'react';
import { difference } from 'lodash';
import Square from './Square';
import './Card.css';

const Card = ({ size = 5, entries = [], freeSpace = true }) => {
    const half = Math.floor(size / 2);
    let used = [];

    const getItems = count => {
        const possibilities = difference(entries, used);
        const shuffled = possibilities.sort(() => 0.5 - Math.random());
        const randomItems = shuffled.slice(0, count);

        used = [...used, ...randomItems];

        return randomItems;
    };

    const generateRow = (numItems, row) => {
        const entries = getItems(numItems);
        const items = freeSpace && row === half ? [...entries.slice(0, half), 'Free Space', ...entries.slice(half + 1)] : entries;
        return (
            <tr key={row}>
                {items.map(item => (
                    <Square key={`${item}${Math.random()}`} text={item} />
                ))}
            </tr>
        );
    };

    const getCardRows = () => {
        let rows = [];

        for (let i = 0; i < size; i++) {
            rows.push(generateRow(size, i));
        }

        return rows;
    };

    return (
        <table>
            <tbody>{getCardRows()}</tbody>
        </table>
    );
};

export default Card;
