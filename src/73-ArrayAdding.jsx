import { useState } from 'react';

function ArrayAdding() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [value, setValue] = useState('');

	function addNote() {
		if (value.trim() === '') return;

		setNotes([...notes, value]);
		setValue('');
	}

	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});

	return (
		<div>
			<ul>{result}</ul>

			<input
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>

			<button onClick={addNote}>Добавить</button>
		</div>
	);
}

export default ArrayAdding;