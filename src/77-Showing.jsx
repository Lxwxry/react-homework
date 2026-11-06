import { useState } from 'react';

function Showing() {
    const initNotes = [
        {
            id: 1,
            name: 'Товар 1',
            desc: 'Полное описание первого товара',
            show: false
        },
        {
            id: 2,
            name: 'Товар 2',
            desc: 'Полное описание второго товара',
            show: false
        },
        {
            id: 3,
            name: 'Товар 3',
            desc: 'Полное описание третьего товара',
            show: false
        }
    ];

    const [notes, setNotes] = useState(initNotes);

    function toggleDescription(id) {
        setNotes(notes.map(note => {
            if (note.id === id) {
                return {
                    ...note,
                    show: !note.show
                };
            }

            return note;
        }));
    }

    return (
        <div>
            <h2>Task 77 Showing</h2>

            {notes.map(note => (
                <p key={note.id}>
                    <strong>{note.name}</strong>

                    {note.show && (
                        <span> — {note.desc}</span>
                    )}

                    {' '}

                    <button onClick={() => toggleDescription(note.id)}>
                        {note.show ? 'Скрыть описание' : 'Показать описание'}
                    </button>
                </p>
            ))}
        </div>
    );
}

export default Showing;
