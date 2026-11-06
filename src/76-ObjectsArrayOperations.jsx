import { useState } from 'react';

function ObjectsArrayOperations() {
    const initNotes = [
        { id: 1, prop1: 'value11', prop2: 'value12', prop3: 'value13' },
        { id: 2, prop1: 'value21', prop2: 'value22', prop3: 'value23' },
        { id: 3, prop1: 'value31', prop2: 'value32', prop3: 'value33' }
    ];

    const [notes, setNotes] = useState(initNotes);

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    const [selectedId, setSelectedId] = useState(null);

    // Задание 1: удаление объекта
    function deleteNote(id) {
        setNotes(notes.filter(note => note.id !== id));

        if (selectedId === id) {
            setSelectedId(null);
            setValue1('');
            setValue2('');
            setValue3('');
        }
    }

    // Задание 2: загрузка данных объекта в инпуты
    function selectNote(note) {
        setSelectedId(note.id);
        setValue1(note.prop1);
        setValue2(note.prop2);
        setValue3(note.prop3);
    }

    // Задание 3: сохранение изменений
    function updateNote() {
        if (selectedId === null) {
            return;
        }

        setNotes(notes.map(note => {
            if (note.id === selectedId) {
                return {
                    ...note,
                    prop1: value1,
                    prop2: value2,
                    prop3: value3
                };
            }

            return note;
        }));
    }

    return (
        <div>
            <h2>Task 76</h2>

            <h3>Редактирование объекта</h3>

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

            <button
                onClick={updateNote}
                disabled={selectedId === null}
            >
                Сохранить изменения
            </button>

            <p>
                {selectedId === null
                    ? 'Выбери объект для редактирования'
                    : `Редактируется объект №${selectedId}`}
            </p>

            <h3>Список объектов</h3>

            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <span>{note.prop1} — </span>
                        <span>{note.prop2} — </span>
                        <span>{note.prop3} </span>

                        <button onClick={() => selectNote(note)}>
                            Редактировать
                        </button>

                        <button onClick={() => deleteNote(note.id)}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ObjectsArrayOperations;
