let currentInput = '';
let previousInput = '';
let operation = null;

// Función para agregar números al display
const appendNumber = (number) => {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
};

// Función para establecer la operación matemática
const setOperation = (op) => {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
};

// Función para realizar el cálculo basado en la operación
const calculateResult = () => {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = (prev + current).toString();
            break;
        case '-':
            result = (prev - current).toString();
            break;
        case '*':
            result = (prev * current).toString();
            break;
        case '/':
            result = (prev / current).toString();
            break;
        default:
            return;
    }

    currentInput = `${result}`;
    operation = null;
    previousInput = '';
    updateDisplay();
};

// Función para limpiar el display
const clearDisplay = () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
};

// Función para actualizar el display
const updateDisplay = () => {
    document.getElementById('display').value = currentInput;
};
