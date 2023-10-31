function checkNumber() {
    const number = parseInt(document.getElementById("number").value);
    const result = isNaN(number) ? "โปรดป้อนตัวเลขที่ถูกต้อง" : (number % 2 === 0 ? "เลขคู่" : "เลขคี่");
    document.getElementById("result").textContent = `${number} เป็น${result}`;
}

document.getElementById("checkButton").addEventListener("click", checkNumber);
document.getElementById("clearButton").addEventListener("click", () => {
    document.getElementById("number").value = "";
    document.getElementById("result").textContent = "";
});