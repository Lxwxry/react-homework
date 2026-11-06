
import { useState } from 'react';

function FormsRadio() {
    const [value, setValue] = useState('1');

    function changeHandler(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <h3>Task 68.1</h3>

            <input
                type="radio"
                name="radio"
                value="1"
                checked={value === '1'}
                onChange={changeHandler}
            />
            1

            <input
                type="radio"
                name="radio"
                value="2"
                checked={value === '2'}
                onChange={changeHandler}
            />
            2

            <input
                type="radio"
                name="radio"
                value="3"
                checked={value === '3'}
                onChange={changeHandler}
            />
            3

            <p>Выбрано: {value}</p>

			<h3>Task 68.2</h3>

            <label>
                <input
                    type="radio"
                    name="language"
                    value="JavaScript"
                    checked={value === 'JavaScript'}
                    onChange={changeHandler}
                />
                JavaScript
            </label>

            <label>
                <input
                    type="radio"
                    name="language"
                    value="Python"
                    checked={value === 'Python'}
                    onChange={changeHandler}
                />
                Python
            </label>

            <label>
                <input
                    type="radio"
                    name="language"
                    value="C#"
                    checked={value === 'C#'}
                    onChange={changeHandler}
                />
                C#
            </label>

            <p>Твой выбор: {value}</p>

            {value === 'JavaScript' && (
                <p>Отличный выбор!</p>
            )}
        </div>
    );
}

export default FormsRadio;
