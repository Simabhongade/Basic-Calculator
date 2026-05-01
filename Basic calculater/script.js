const display = document.getElementById('display');
let expression = '';

function updateDisplay(value = '') {
    display.value = value || expression || '0';
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function inputButton(value) {
    // Prevent multiple operators in row except first or after = 
    if (isOperator(value) && (expression === '' || isOperator(expression.slice(-1)))) {
        if (expression !== '') {
            expression = expression.slice(0, -1) + value;
        } else {
            expression = value;
        }
    } else {
        expression += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        // Replace × with * for division/multiplication symbols if any, but using standard
        let calcExpression = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        
        // Safe eval wrapper (only allow numbers, operators, parens)
        const result = eval(calcExpression);
        
        if (!isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = '';
        updateDisplay('Error');
        setTimeout(clear, 1500);
    }
}

function clear() {
    expression = '';
    updateDisplay();
}

function backspace() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

// Button events
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.key || button.textContent.trim();
        
        if (button.classList.contains('equals') || value === '=') {
            calculate();
        } else if (button.classList.contains('clear') || value === 'C' || value === 'Clear') {
            clear();
        } else {
            inputButton(value);
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        e.preventDefault();
        inputButton(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        e.preventDefault();
        inputButton(key);
    } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calculate();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        e.preventDefault();
        clear();
    } else if (key === 'Backspace') {
        e.preventDefault();
        backspace();
    }
});

// Prevent zoom on iOS
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

updateDisplay();

