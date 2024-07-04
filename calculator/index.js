function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    console.log("num1:", num1);
    console.log("num2:", num2);
    console.log("operator:", operator);

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Error: Division by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator";
            break;
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Calculator</title>
</head>
<body>
    <h2>Simple Calculator</h2>
    <input type="number" id="num1">
    <input type="number" id="num2">
    <select id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <br><br>
    <button onclick="calculate()">Calculate</button>
    <br><br>
    <p id="result">Result: </p>

    <script src="calculator.js"></script>
</body>
</html>
