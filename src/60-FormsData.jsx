
import { useState } from 'react';

function getToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export default function FormsData() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const [date1, setDate1] = useState(getToday());
    const [date2, setDate2] = useState(getToday());
    const [dateResult, setDateResult] = useState('');

    const [number, setNumber] = useState('');
    const [digitSum, setDigitSum] = useState('');

    const [divisorNumber, setDivisorNumber] = useState('');
    const [divisorProduct, setDivisorProduct] = useState('');

    function calculateDateDifference() {
        if (!date1 || !date2) {
            setDateResult('Введи обе даты');
            return;
        }

        const first = Date.parse(`${date1}T00:00:00Z`);
        const second = Date.parse(`${date2}T00:00:00Z`);

        setDateResult(
            `${Math.abs(first - second) / 86400000} дней`
        );
    }

    function calculateDigitSum() {
        if (number.trim() === '') {
            setDigitSum('');
            return;
        }

        const digits = number.replace(/[-.]/g, '');

        if (!/^\d+$/.test(digits)) {
            setDigitSum('Введи целое число');
            return;
        }

        const sum = digits
            .split('')
            .reduce((total, digit) => total + Number(digit), 0);

        setDigitSum(String(sum));
    }

    function calculateDivisorProduct() {
        if (divisorNumber.trim() === '') {
            setDivisorProduct('');
            return;
        }

        const n = Number(divisorNumber);

        if (!Number.isSafeInteger(n) || n < 1) {
            setDivisorProduct('Введи целое число больше нуля');
            return;
        }

        let product = 1n;

        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                product *= BigInt(i);
            }
        }

        setDivisorProduct(product.toString());
    }

    return (
        <div>
            <h2>Forms Data</h2> 
            <h3>1. Сумма и произведение</h3>

            <input
                type="number"
                value={num1}
                onChange={event => setNum1(event.target.value)}
                placeholder="Первое число"
            />

            <input
                type="number"
                value={num2}
                onChange={event => setNum2(event.target.value)}
                placeholder="Второе число"
            />

            <button
                onClick={() =>
                    setResult(
                        `Сумма: ${Number(num1) + Number(num2)}`
                    )
                }
            >
                Сложить
            </button>

            <button
                onClick={() =>
                    setResult(
                        `Произведение: ${Number(num1) * Number(num2)}`
                    )
                }
            >
                Умножить
            </button>

            <p>{result}</p>

            <h3>2. Разница между датами</h3>

            <input
                type="date"
                value={date1}
                onChange={event => setDate1(event.target.value)}
            />

            <input
                type="date"
                value={date2}
                onChange={event => setDate2(event.target.value)}
            />

            <button onClick={calculateDateDifference}>
                Найти разницу
            </button>

            <p>{dateResult}</p>

            <h3>3. Сумма цифр числа</h3>

            <input
                type="number"
                step="1"
                value={number}
                onChange={event => setNumber(event.target.value)}
                onBlur={calculateDigitSum}
                placeholder="Введи целое число"
            />

            <p>Сумма цифр: {digitSum}</p>

            <h3>4. Произведение делителей</h3>

            <input
                type="number"
                step="1"
                value={divisorNumber}
                onChange={event => setDivisorNumber(event.target.value)}
                onBlur={calculateDivisorProduct}
                placeholder="Введи целое число"
            />

            <p>Произведение делителей: {divisorProduct}</p>
        </div>
    );
}
