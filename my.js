function appendNumber(num) {
    document.getElementById("result").value += num;
}

function appendOperator(op) {
    document.getElementById("result").value += " " + op + " ";
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let expression = document.getElementById("result").value;
    try {
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Lỗi";
    }
}