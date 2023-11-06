function run() {
    let s1 = document.getElementById('F').value;
    let ss1 = Number(s1);
    let s2 = document.getElementById('L').value;
    let ss2 = Number(s2);

    while (ss1 < ss2) {
        console.log(ss1);
        ss1 = ss1 + 1;
    }
}