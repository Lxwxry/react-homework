import { useState } from 'react';

function FormsDefaultValue() {
    const [value, setValue] = useState('text');
    const [checked, setChecked] = useState(true);

    return (
        <div>
            <h3>Task 69</h3>

            <input defaultValue={value} />

            <br />

            <input type="checkbox" defaultChecked={checked} />
        </div>
    );
}

export default FormsDefaultValue;