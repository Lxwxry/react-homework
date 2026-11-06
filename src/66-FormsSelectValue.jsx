import {useState} from 'react';

function FormsSelectValue() {
    const [value, setValue] = useState('');

    return <div>
        <h3> task 66 </h3>
        <select value={value} onChange={(event) => setValue(event.target.value)}>
            <option value="1">от 0 до 12 лет</option>
            <option value="2">от 13 до 17 лет</option>
            <option value="3">от 18 до 25 лет</option>
            <option value='4'>старше 25 лет</option>
        </select>
        <p>
            {value === '1' && 'Вы выбрали возраст от 0 до 12 лет'}
            {value === '2' && 'Вы выбрали возраст от 13 до 17 лет'}
            {value === '3' && 'Вы выбрали возраст от 18 до 25 лет'}
            {value === '4' && 'Вы выбрали возраст старше 25 лет'}
        </p>
    </div>;
}
export default FormsSelectValue;
