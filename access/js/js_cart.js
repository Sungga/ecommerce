// js for money on cart
let oldPrice = document.querySelectorAll('.cart__product--price span:nth-child(1)');
let newPrice = document.querySelectorAll('.cart__product--price span:nth-child(2)');
let total = document.querySelectorAll('.cart__product--total');
let quantity = document.querySelectorAll('.cart__product--quantity input');
let btnSub = document.querySelectorAll('.cart__product--quantity .btnSub');
let btnAdd = document.querySelectorAll('.cart__product--quantity .btnAdd');

// Ham chuyen dang tien sang dang so
function convertMoneyIntoInt(moneyElement) {
    return parseInt(moneyElement.replace(/[^\d]/g, ''));
}

// Ham chuyen dang so sang dang tien
function convertIntIntoMoney(intElement) {
    return `${parseInt(intElement).toLocaleString('vi-VN')} đ`;
}

// Ham tinh toan tong tien
function calcTotal(index) {
    let newTotal = quantity[index].value * convertMoneyIntoInt(newPrice[index].innerHTML);
    total[index].innerHTML = convertIntIntoMoney(newTotal.toString());
}

// Ham giam so luong
function subQuantity(index) {
    if(quantity[index].value > 1) quantity[index].value--;
}

// Ham tang so luong
function addQuantity(index) {
    quantity[index].value++;
}

oldPrice.forEach(function(item) {
    item.innerHTML = convertIntIntoMoney(item.innerHTML);
});

newPrice.forEach(function(item) {
    item.innerHTML = convertIntIntoMoney(item.innerHTML);
});

total.forEach(function(item, index) {
    calcTotal(index);
});

btnSub.forEach(function(item, index) {
    item.addEventListener('click', function() {
        subQuantity(index);
        calcTotal(index);
    });
});

btnAdd.forEach(function(item, index) {
    item.addEventListener('click', function() {
        addQuantity(index);
        calcTotal(index);
    });
});

