function calculateGrade() {
    // รับคะแนนและชื่อจากฟอร์ม
    const name = document.getElementById("name").value;
    const score = parseFloat(document.getElementById("score").value);
    
    let grade = "";
    
    // ตรวจสอบเงื่อนไขและกำหนดเกรด
    if (score < 50) {
        grade = "เกรด 0";
    } else if (score >= 50 && score < 55) {
        grade = "เกรด 1.0";
    } else if (score >= 55 && score < 60) {
        grade = "เกรด 1.5";
    } else if (score >= 60 && score < 65) {
        grade = "เกรด 2.0";
    } else if (score >= 65 && score < 70) {
        grade = "เกรด 2.5";
    } else if (score >= 70 && score < 75) {
        grade = "เกรด 3.0";
    } else if (score >= 75 && score < 80) {
        grade = "เกรด 3.5";
    } else if (score >= 80) {
        grade = "เกรด 4.0";
    }
    
    // แสดงผลในรูปแบบ Alert
    alert("ชื่อ: " + name + "\nเกรดของคุณคือ: " + grade);
}