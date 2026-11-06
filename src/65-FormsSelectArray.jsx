import { useState } from "react";

function FormsSelectArray(){
    const texts = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Новоуральск'];
    const [value, setValue] = useState('');

const options =texts.map((text, index) => {
    return <option key={index}>{text}</option>
});

    return <div>
        <h3> task 65 </h3>
        <select value={value} onChange={(event) => setValue(event.target.value)}>
            {options}
        </select>
        <p>
            Ваш выбор: {value}
        </p>
    </div>;
}
export default FormsSelectArray;
