
import { useState } from 'react';

function FormsSelectIntro() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<div>
            <h3> 64 task </h3>
			<select value={value} onChange={handleChange}>
				<option value="">Выберите город</option>
				<option value="Москва">Москва</option>
				<option value="Санкт-Петербург">Санкт-Петербург</option>
				<option value="Екатеринбург">Екатеринбург</option>
				<option value="Новоуральск">Новоуральск</option>
			</select>

			<p>Ваш выбор: {value || 'город не выбран'}</p>
		</div>
	);
}

export default FormsSelectIntro;
