function calc() {
    let a = parseFloat(document.forms['math']['op1'].value);
    let b = parseFloat(document.forms['math']['op2'].value);
    let c = document.forms['math']['operand'].value;
    let result;

    if (c === "+") {
        result = a + b;
    } else if (c === "-") {
        result = a - b;
    }

    alert("ผลลัพธ์: " + result);
}