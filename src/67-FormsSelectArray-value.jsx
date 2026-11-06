
import { useState } from 'react';

function FormsSelectArrayValue() {
    const texts = ['text1', 'text2', 'text3', 'text4'];

    const [value, setValue] = useState('0');

    const options = texts.map((text, index) => {
        return (
            <option key={index} value={index}>
                {text}
            </option>
        );
    });

    return (
        <div>
            <h3>Task 67</h3>

            <select
                value={value}
                onChange={event => setValue(event.target.value)}
            >
                {options}
            </select>

            <p>Ваш выбор: {texts[Number(value)]}</p>
        </div>
    );
}

export default FormsSelectArrayValue;
