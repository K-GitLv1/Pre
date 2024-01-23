function generateJSON() {
    var formData = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        sex: document.getElementById("sex").value,
        department: document.getElementById("department").value,
        age: parseInt(document.getElementById("age").value)
    };

    var jsonOutput = JSON.stringify(formData, null, 2);
    document.getElementById("jsonOutput").innerText = jsonOutput;
}
