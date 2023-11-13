// ไฟล์ JavaScript (week5-1.js)
var originalBackgroundColor; // เพิ่มตัวแปรเก็บสีพื้นหลังเดิม

function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("กรุณากรอก E-mail ให้ถูกต้อง");
        return false;
    }

    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("กรุณาเลือกเพศ");
        return false;
    }

    var educationLevel = document.getElementById("educationLevel").value;

    var favoriteJobs = document.querySelectorAll('input[name="favoriteJob"]:checked');
    if (favoriteJobs.length === 0) {
        alert("กรุณาเลือกงานอดิเรก");
        return false;
    }

    var backgroundColor = document.getElementById("backgroundColor").value;

    var message = "ชื่อ: " + firstName +
                  "\nนามสกุล: " + lastName +
                  "\nE-mail: " + email +
                  "\nเพศ: " + gender.value +
                  "\nระดับการศึกษา: " + educationLevel +
                  "\nงานอดิเรก: " + getCheckedValues(favoriteJobs) +
                  "\nสีพื้นหลัง: " + backgroundColor;

    // ซ่อนฟอร์มและแสดงข้อความสำเร็จ
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";

    // เปลี่ยนสีพื้นหลังของ body
    document.body.style.backgroundColor = backgroundColor;

    return false; // แก้ไขเป็น false เพื่อป้องกันฟอร์มจากการ submit
}

function goToRegistrationPage() {
    // ล้างค่าฟอร์ม
    document.getElementById("registrationForm").reset();

    // แสดงฟอร์มและซ่อนข้อความสำเร็จ
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("successMessage").style.display = "none";

    // กลับไปที่ส่วนบนของหน้า
    window.scrollTo(0, 0);

    // เปลี่ยนสีพื้นหลังของ body กลับเป็นสีเดิม
    document.body.style.backgroundColor = originalBackgroundColor;
}

function getCheckedValues(elements) {
    var values = [];
    elements.forEach(function (element) {
        values.push(element.value);
    });
    return values.join(", ");
}

// เพิ่ม function เพื่อกำหนดค่าเริ่มต้นสีพื้นหลัง
window.onload = function () {
    originalBackgroundColor = document.getElementById("backgroundColor").value;
};
