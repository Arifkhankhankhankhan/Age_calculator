import React, { useState } from 'react';

const AgeCalculator = () => {
    const [age, setAge] = useState('');
    const [result, setResult] = useState('');

    const calculateAge = () => {
        if (age === '') {
            alert('Please enter your birth date');
        } else {
            const dob = new Date();
            const dob_year = dob.getFullYear();
            const now = new Date(age);
            const now_year = now.getFullYear();
            const calculatedAge = dob_year - now_year;
            setResult(`Your age is ${calculatedAge}`);
        }
    };

    return (
        <div>
            <input
                type="date"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button className="age-button" onClick={calculateAge}>
                Calculate Age
            </button>
            <div className="result">{result}</div>
        </div>
    );
};

export default AgeCalculator;