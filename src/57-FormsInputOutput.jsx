import { useState } from 'react';

export default function FormsInputOutput() {
    const [value, setValue] = useState('');

    return (
        <div>
            <h3>Счётчик количества символов</h3>
            <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        
            <p>Количество символов: {value.length}</p>
        </div>
    );
}