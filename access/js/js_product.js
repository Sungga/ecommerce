// --------------------------<< js for img product >>--------------------------
let bigImg = document.querySelector('.product__left--bigImg img');
let smallItemImg = document.querySelectorAll('.product__left--smallImg .smallImg__container .item');
let smallImg = document.querySelectorAll('.product__left--smallImg .smallImg__container .item img');
let btnToLeft = document.querySelector('.product__left--smallImg .btn__toLeft');
let btnToRight = document.querySelector('.product__left--smallImg .btn__toRight');
let numberOfFirstImg = 0;

function arrangeSmallImg(imgFirst) {
    for(let i = 0; i < smallItemImg.length; i++) {
        smallItemImg[i].style.left = (i - imgFirst) * 90.6 + "px";
    }

    numberOfFirstImg = imgFirst;
}

function addClassFocus(number) {
    smallItemImg.forEach(function(item, index) {
        if(number == index) {
            item.classList.add('focus');
        }
        else {
            item.classList.remove('focus');
        }
    });
}

function showBigImg(number) {
    bigImg.src = smallImg[number].src;
}

arrangeSmallImg(0);

btnToLeft.addEventListener('click', function() {
    if(numberOfFirstImg != 0) {
        arrangeSmallImg(numberOfFirstImg - 1);
    }
});

btnToRight.addEventListener('click', function() {
    if(numberOfFirstImg != smallItemImg.length - 5) {
        arrangeSmallImg(numberOfFirstImg + 1);
    }
});

smallItemImg.forEach(function(item, index) {
    item.addEventListener('mouseover', function() {
        addClassFocus(index);
        showBigImg(index)
    });
});

// --------------------------<< js for sub and add quantity >>----------------------------
let btnSub = document.querySelector('.product__attribute .product__quantity .btnSub');
let btnAdd = document.querySelector('.product__attribute .product__quantity .btnAdd');
let inputQuantity = document.querySelector('.product__attribute .product__quantity input');

btnSub.addEventListener('click', function() {
    let currentValue = parseInt(inputQuantity.value, 10);
    if (currentValue > parseInt(inputQuantity.min, 10)) {
        inputQuantity.value = currentValue - 1;
    }
});

btnAdd.addEventListener('click', function() {
    let currentValue = parseInt(inputQuantity.value, 10);
    inputQuantity.value = currentValue + 1;
});

// --------------------------<< js for deal >>-------------------------------

let inputCheckSelected = document.querySelectorAll('.deal__product--name input');
let productSaveMoney = document.querySelectorAll('.deal__item p span:first-child');
let productPrice = document.querySelectorAll('.deal__item p span:last-child');
let totalDealElement = document.querySelector('.deal__buy--total');
let saveMoneyElement = document.querySelector('.deal__buy--save');

// Ham kiem tra xem san pham day co duoc tick hay khong
function checkOk(productSale) {
    if(productSale.checked) {
        return true;
    }
    return false;
}

// Ham chuyen dang tien sang dang so
function convertMoneyIntoInt(moneyElement) {
    return parseInt(moneyElement.replace(/[^\d]/g, ''));
}

// Ham chuyen dang so sang dang tien
function convertIntIntoMoney(intElement) {
    return intElement = `${parseInt(intElement).toLocaleString('vi-VN')} đ`;
}

// Ham update tong tien và tong tien tiet kiem duoc
function updateMoney() {
    let totalAmount = 0;
    let totalSave = 0;
    inputCheckSelected.forEach(function(item, index) {
        if(checkOk(item)) {
            totalAmount += convertMoneyIntoInt(productPrice[index].innerHTML);
            totalSave += convertMoneyIntoInt(productSaveMoney[index].innerHTML);
        }
    });
    // totalDealElement.innerHTML = 'Tổng tiền: ' + totalAmount.toString();
    totalDealElement.value = 'Tổng tiền: ' + convertIntIntoMoney(totalAmount.toString());
    totalSave -= totalAmount; // Tien tiet kiem duoc bang gia goc tru di tong so tien phai tra
    saveMoneyElement.value = 'Tiết kiệm: ' + convertIntIntoMoney(totalSave.toString());
}

// Chuyen dang so thanh dang tien cua cac gia tien
productSaveMoney.forEach(function(item, index) {
    item.innerHTML = convertIntIntoMoney(item.innerHTML);
});
productPrice.forEach(function(item, index) {
    item.innerHTML = convertIntIntoMoney(item.innerHTML);
});

// Update so tien tong cong va so tien tiet kiem duoc vao lan dau tien lan dau tien
updateMoney();

// Update so tien tong cong va so tien tiet kiem duoc vao nhung lan thay doi sau
inputCheckSelected.forEach(function(item) {
    item.addEventListener('click', function() {
        updateMoney();
    });
});

