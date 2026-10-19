
import { useState } from 'react';

export default function FormsInputSeveral() {
    const [values, setValues] = useState(['', '', '', '', '']);

    function handleChange(index, event) {
        const newValues = [...values];
        newValues[index] = event.target.value;
        setValues(newValues);
    }

    const numbers = values
        .filter(value => value.trim() !== '')
        .map(Number);

    const average = numbers.length
        ? numbers.reduce((sum, number) => sum + number, 0) / numbers.length
        : 0;

    return (
        <div>
            <h3>Среднее арифметическое</h3>

            {values.map((value, index) => (
                <input
                    key={index}
                    type="number"
                    value={value}
                    onChange={event => handleChange(index, event)}
                    placeholder={`Число ${index + 1}`}
                />
            ))}

            <p>Среднее: {average.toFixed(2)}</p>
        </div>
    );
}
