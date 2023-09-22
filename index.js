let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    }
    
    catch (error) {
        document.getElementById("display").value = "Error";
    }
}

let hasTurnedOff = true;

function switchTheme() {
    const calculator = document.getElementById("calculator");
    const button = document.getElementById("switch-theme-button");

    if (hasTurnedOff) {
        calculator.classList.remove("light-mode");
        calculator.classList.add("dark-mode");
        button.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    
    else {
        calculator.classList.remove("dark-mode");
        calculator.classList.add("light-mode");
        button.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    hasTurnedOff = !hasTurnedOff;
}
