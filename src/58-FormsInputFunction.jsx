
import { useState } from 'react';

export default function FormsInputFunction() {
    const [age, setAge] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    function getBirthYear(age) {
        if (age === '') return '';
        return new Date().getFullYear() - Number(age);
    }

    function toCelsius(value) {
        if (value === '') return '';
        return ((Number(value) - 32) * 5 / 9).toFixed(1);
    }

    return (
        <div>
            <h3>Год рождения</h3>
            <input
                type="number"
                min="0"
                placeholder="Введите свой возраст"
                value={age}
                onChange={(event) => setAge(event.target.value)}
            />
            <p>Примерный год рождения: {getBirthYear(age)}</p>

            <h3>Фаренгейт в Цельсий</h3>
            <input
                type="number"
                placeholder="Градусы °F"
                value={fahrenheit}
                onChange={(event) => setFahrenheit(event.target.value)}
            />
            <p>Температура: {toCelsius(fahrenheit)} °C</p>
        </div>
    );
}
