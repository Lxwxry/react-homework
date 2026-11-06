import { useState } from 'react';

function FormsObject() {
    const initDate = {
        year: 2025,
        month: 12,
        day: 31
    };

    const [date, setDate] = useState(initDate);

    function handleChange(prop, event) {
        setDate({
            ...date,
            [prop]: event.target.value
        });
    }

    const weekdays = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    const jsDate = new Date(
        Number(date.year),
        Number(date.month) - 1,
        Number(date.day)
    );

    const weekday = weekdays[jsDate.getDay()];

    return (
        <div>
            <h3>Task 71</h3>

            <input
                type="number"
                value={date.year}
                onChange={(event) => handleChange('year', event)}
            />

            <input
                type="number"
                value={date.month}
                onChange={(event) => handleChange('month', event)}
            />

            <input
                type="number"
                value={date.day}
                onChange={(event) => handleChange('day', event)}
            />

            <p>
                Дата: {date.year}.{date.month}.{date.day}
            </p>

            <p>
                День недели: {weekday}
            </p>
        </div>
    );
}

export default FormsObject;