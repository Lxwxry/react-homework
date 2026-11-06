import { useState } from 'react';

function ObjectsArrayAdding() {
    const initNotes = [
        {
            id: 1,
            prop1: 'value11',
            prop2: 'value12',
            prop3: 'value13'
        },
        {
            id: 2,
            prop1: 'value21',
            prop2: 'value22',
            prop3: 'value23'
        },
        {
            id: 3,
            prop1: 'value31',
            prop2: 'value32',
            prop3: 'value33'
        }
    ];

    const [notes, setNotes] = useState(initNotes);

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    // Задание 1
    function addNote() {
        const newNote = {
            id: Date.now(),
            prop1: 'Новый элемент 1',
            prop2: 'Новый элемент 2',
            prop3: 'Новый элемент 3'
        };

        setNotes([...notes, newNote]);
    }

    // Задание 2
    function addNoteFromInputs() {
        if (!value1.trim() || !value2.trim() || !value3.trim()) {
            return;
        }

        const newNote = {
            id: Date.now(),
            prop1: value1,
            prop2: value2,
            prop3: value3
        };

        setNotes([...notes, newNote]);

        setValue1('');
        setValue2('');
        setValue3('');
    }

    const result = notes.map(note => {
        return (
            <li key={note.id}>
                <span>{note.prop1} </span>
                <span>{note.prop2} </span>
                <span>{note.prop3}</span>
            </li>
        );
    });

    return (
        <div>
            <h2>Task 75</h2>

            <h3>Задание 1. Добавление готового объекта</h3>

            <button onClick={addNote}>
                Добавить элемент
            </button>

            <h3>Задание 2. Добавление через инпуты</h3>

            <input
                value={value1}
                onChange={event => setValue1(event.target.value)}
                placeholder="Первое значение"
            />

            <input
                value={value2}
                onChange={event => setValue2(event.target.value)}
                placeholder="Второе значение"
            />

            <input
                value={value3}
                onChange={event => setValue3(event.target.value)}
                placeholder="Третье значение"
            />

            <button onClick={addNoteFromInputs}>
                Добавить из инпутов
            </button>

            <h3>Список элементов</h3>

            <ul>
                {result}
            </ul>
        </div>
    );
}

export default ObjectsArrayAdding;
