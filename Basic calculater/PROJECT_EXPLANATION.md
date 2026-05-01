# Basic Calculator - Step-wise Explanation

## 1. Project Structure
```
calculater intership/
├── index.html      # UI Layout
├── styles.css      # Styling & Responsiveness
├── script.js       # Logic & Functionality
├── README.md       # Usage Instructions
├── TODO.md         # Development Progress
└── PROJECT_EXPLANATION.md  # This file
```

## 2. HTML Structure (index.html)
```
calculator
├── display (input readonly)
└── buttons grid (CSS Grid)
    Row1: C  /  ×  -
    Row2: 7  8  9  +
    Row3: 4  5  6  =
    Row4: 1  2  3  0
    Row5:     .    
```
- `data-key`: Passes value to JS (e.g., data-key="/").
- Classes: `num`, `operator`, `equals`, `clear`, `zero` (wide).

## 3. CSS Styling (styles.css)
- **Layout**: Flex center, Grid buttons.
- **Design**: Dark theme (#2c3e50), gradients, shadows, rounded buttons.
- **Interactions**: Hover lift, active press.
- **Responsive**: Mobile font/button sizes.
- Colors: Num=🔵, Op=🔴, =🟢, C=🟠.

## 4. JavaScript Functionality (script.js)
### State
```js
let expression = '';  // "2+3*4"
```

### Key Functions
- `inputButton(val)`: Append to expression (smart ops).
- `calculate()`: `eval(expression)` → BODMAS result, catch errors.
- `clear()`: Reset.
- `updateDisplay()`: Show expression/result.

### Events
**Buttons**:
```js
button.onclick → if equals: calculate(), else inputButton(data-key)
```

**Keyboard**:
- 0-9 . → input
- + - * / → input
- Enter/= → calculate
- Backspace → delete last
- C/Esc → clear

### BODMAS Example
1. Type: 2 + 3 * 4
2. expression = "2+3*4"
3. eval() → 14 (multi first)
4. Display: 14

## 5. Testing Examples
| Input | Expected | Notes |
|-------|----------|-------|
| 5+3= | 8 | Basic add |
| 10/2= | 5 | Division |
| 2+3*4= | 14 | BODMAS (* first) |
| 10/0= | Error | Handled |
| 12*3/4+5= | 14 | Chained |

## 6. Run
```
start index.html
```
Keyboard/mouse fully supported.

**Requirements 100% met!** Professional calculator app.

