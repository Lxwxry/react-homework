import { useState } from 'react';

function FormsArray() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    function changeHandler(index, event) {
        setNotes([
            ...notes.slice(0, index),
            event.target.value,
            ...notes.slice(index + 1)
        ]);
    }

    const inputs = notes.map((note, index) => {
        return (
            <input
                key={index}
                type="number"
                value={note}
                onChange={(event) => changeHandler(index, event)}
            />
        );
    });

    const average = notes.reduce((sum, note) => {
        return sum + Number(note);
    }, 0) / notes.length;

    return (
        <div>
            <h3>Task 70</h3>

            {inputs}

            <p>Среднее арифметическое: {average.toFixed(2)}</p>
        </div>
    );
}

export default FormsArray;