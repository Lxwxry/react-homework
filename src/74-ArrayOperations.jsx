
import { useState } from 'react';

function ArrayOperations() {
    // Задание 1: возведение чисел в квадрат
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    function squareNumber(index) {
        setNumbers(numbers.map((number, i) =>
            i === index ? number ** 2 : number
        ));
    }

    // Задание 2: удаление элементов
    const [items, setItems] = useState([10, 20, 30, 40, 50]);

    function deleteItem(index) {
        setItems(items.filter((item, i) => i !== index));
    }

    // Задания 3 и 4: выбор и редактирование текста
    const [notes, setNotes] = useState([
        { id: 1, text: 'Первый текст' },
        { id: 2, text: 'Второй текст' },
        { id: 3, text: 'Третий текст' }
    ]);

    const [value, setValue] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    function selectNote(note) {
        setSelectedId(note.id);
        setValue(note.text);
    }

    function updateNote() {
        if (selectedId === null) return;

        setNotes(notes.map(note =>
            note.id === selectedId
                ? { ...note, text: value }
                : note
        ));
    }

    // Задание 5: переворот массива
    const [reverseItems, setReverseItems] = useState([
        'Первый',
        'Второй',
        'Третий',
        'Четвёртый'
    ]);

    function reverseArray() {
        setReverseItems([...reverseItems].reverse());
    }

    return (
        <div>
            <h2>Task 74</h2>

            <h3>Задание 1</h3>

            <ul>
                {numbers.map((number, index) => (
                    <li
                        key={index}
                        onClick={() => squareNumber(index)}
                    >
                        {number}
                    </li>
                ))}
            </ul>

            <h3>Задание 2</h3>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}{' '}
                        <button onClick={() => deleteItem(index)}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Задания 3&4</h3>

            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                onBlur={updateNote}
                placeholder="Выбери текст из списка"
            />

            <ul>
                {notes.map(note => (
                    <li
                        key={note.id}
                        onClick={() => selectNote(note)}
                    >
                        {note.text}
                    </li>
                ))}
            </ul>

            <h3>Задание 5</h3>

            <button onClick={reverseArray}>
                Перевернуть список
            </button>

            <ul>
                {reverseItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ArrayOperations;
