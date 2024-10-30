// Lấy số dương từ chuỗi input
let addNumberBtn = document.getElementById("add-number-button");

function positiveTotal() {
    let n = document.getElementById("number-n");
    let numberN = Number(n.value);
    if (numberN > 0) {
        console.log(numberN);
    } 
    else {
        alert('Please enter a positive number');
    }
}
addNumberBtn.onclick = positiveTotal;


// Hiển thị số dương lên màn hình
let displayNumber = document.getElementById("positive-total");

function displayPositiveNumber() {
    let n = document.getElementById("number-n");
    let numberN = Number(n.value);
    if (numberN > 0) {
        displayNumber.innerHTML = numberN;
    } else {
        displayNumber.textContent = 'Vui lòng nhập số dương';
    }
}
addNumberBtn.onclick = displayPositiveNumber;


// Bài 1 - Đếm số dương
let pncBtn = document.getElementById("pncount");

let positiveNumberCount = document.getElementById("positive-number-count");

function countPositiveNumber() {
    let n = document.getElementById("number-n");
    let numberN = Math.floor(Number(n.value));
    
    // Kiểm tra xem numberN có phải số dương không
    if (numberN > 0) {
        positiveNumberCount.innerHTML = `<p>Số dương tổng cộng có: </p>${numberN}`; // Tổng số dương từ 1 đến numberN là chính numberN
    } else {
        positiveNumberCount.textContent = 0; // Nếu numberN <= 0, không có số dương nào
    }
}
pncBtn.onclick = countPositiveNumber;


// Bài 2 - Tìm số nhỏ nhất

let smallestNoBtn = document.getElementById("fsmallestno");
let smallestNoDisplay = document.getElementById("smallest-number");

function findSmallestNumber() {
    let n = document.getElementById("number-n");
    let numberN = Math.floor(Number(n.value));

    if (numberN > 0) {
        let smallestNumber = 1;
        for (let i = 2; i <= numberN; i++) {
            smallestNumber = Math.min(smallestNumber, i);
        }
        smallestNoDisplay.innerHTML = `<p>Số nhỏ nhất từ 1 đến ${numberN} là: </p>${smallestNumber}`;
    } else {
        smallestNoDisplay.textContent = 0;
    }
}
smallestNoBtn.onclick = findSmallestNumber;


// Bài 3 - Tìm số chẵn cuối cùng

