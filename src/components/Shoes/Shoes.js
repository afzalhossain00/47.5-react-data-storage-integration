import React from 'react';
import { multiply, subtraction } from '../../utilities/calculate';

const Shoes = () => {
    const first = 100;
    const second = 30;
    const total = multiply(first, second);
    const sum = subtraction(first, second)
    return (
        <div>
            <h3>This is shoes components</h3>
            <p>Shoe Price: {total}</p>
            <p>Subtraction: {sum}</p>
        </div>
    );
};

export default Shoes;