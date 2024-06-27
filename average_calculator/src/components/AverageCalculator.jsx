// src/components/AverageCalculator.js
import React, { useState } from 'react';
import { fetchNumbers } from '../services/apiService';

const AverageCalculator = () => {
    const [numbers, setNumbers] = useState([]);
    const [average, setAverage] = useState(null);
    const [prevState, setPrevState] = useState([]);
    const [currState, setCurrState] = useState([]);

    const handleFetchNumbers = async (type) => {
        try {
            const data = await fetchNumbers(type);
            setPrevState(data.windowPrevState);
            setCurrState(data.windowCurrState);
            setNumbers(data.numbers);
            setAverage(data.avg);
        } catch (error) {
            console.error('Error fetching numbers:', error);
        }
    };

    return (
        <div>
            <h1>Average Calculator</h1>
            <button onClick={() => handleFetchNumbers('p')}>Fetch Prime Numbers</button>
            <button onClick={() => handleFetchNumbers('f')}>Fetch Fibonacci Numbers</button>
            <button onClick={() => handleFetchNumbers('e')}>Fetch Even Numbers</button>
            <button onClick={() => handleFetchNumbers('r')}>Fetch Random Numbers</button>
            <div>
                <h2>Previous State</h2>
                <p>{prevState.join(', ')}</p>
                <h2>Current State</h2>
                <p>{currState.join(', ')}</p>
                <h2>Numbers</h2>
                <p>{numbers.join(', ')}</p>
                <h2>Average</h2>
                {average !== null && <p>{average}</p>}
            </div>
        </div>
    );
};

export default AverageCalculator;
