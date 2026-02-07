let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function displayValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        addHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function square() {
    display.value = Math.pow(display.value, 2);
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function addHistory(text) {
    let li = document.createElement("li");
    li.textContent = text;
    historyList.appendChild(li);
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
