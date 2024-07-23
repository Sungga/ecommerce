// -------------------------<< js for money on cart >>------------------------
let oldPrice = document.querySelectorAll('.cart__product--price span:nth-child(1)');
let newPrice = document.querySelectorAll('.cart__product--price span:nth-child(2)');
let quantity = document.querySelectorAll('.cart__product--quantity input');
let btnSub = document.querySelectorAll('.cart__product--quantity .btnSub');
let btnAdd = document.querySelectorAll('.cart__product--quantity .btnAdd');
let total = document.querySelectorAll('.cart__product--total');
let allTotal = document.querySelector('.allTotal');
let btnSelectProduct = document.querySelectorAll('.cart__product--select');
let btnSelectAllProduct = document.querySelector('.total__left input[type="checkbox"]');
let boxQuantity = document.querySelectorAll('.cart__product--quantity');

// Ham chuyen dang tien sang dang so
function convertMoneyIntoInt(moneyElement) {
    return parseInt(moneyElement.replace(/[^\d]/g, ''));
}

// Ham chuyen dang so sang dang tien
function convertIntIntoMoney(intElement) {
    return `${parseInt(intElement).toLocaleString('vi-VN')} đ`;
}

// Ham tinh toan tong tien cho tung san pham
function calcTotal(index) {
    let newTotal = quantity[index].value * convertMoneyIntoInt(newPrice[index].innerHTML);
    total[index].innerHTML = convertIntIntoMoney(newTotal.toString());
}

// Ham tinh toan tong tien cho tat ca san pham
function calcAllTotal() {
    let newAllTotal = 0;
    btnSelectProduct.forEach(function(item, index) {
        if(item.checked) {
            newAllTotal += convertMoneyIntoInt(total[index].innerHTML);
        }
    });
    allTotal.innerHTML = 'Tổng tiền: ' + convertIntIntoMoney(newAllTotal);
}

// Ham giam so luong
function subQuantity(index) {
    if(quantity[index].value > 1) quantity[index].value--;
}

// Ham tang so luong
function addQuantity(index) {
    quantity[index].value++;
}

// Hien thi gia cu o dang tien
oldPrice.forEach(function(item) {
    item.innerHTML = convertIntIntoMoney(item.innerHTML);
});

// Hien thi gia khuyen mai o dang tien
newPrice.forEach(function(item) {
    item.innerHTML = convertIntIntoMoney(item.innerHTML);
});

// tinh tong tien cho tung san pham o lan dau
total.forEach(function(item, index) {
    calcTotal(index);
});

// giam so san pham
btnSub.forEach(function(item, index) {
    item.addEventListener('click', function() {
        subQuantity(index);
        calcTotal(index);
    });
});

// tang so san pham
btnAdd.forEach(function(item, index) {
    item.addEventListener('click', function() {
        addQuantity(index);
        calcTotal(index);
    });
});

// bat su kien moi thay doi lua chon san pham
btnSelectProduct.forEach(function(item) {
    item.addEventListener('click', function() {
        calcAllTotal();
    });
});

// bat su kien tang giam so luong san pham co chon
boxQuantity.forEach(function(item, index) {
    item.addEventListener('click', function() {
        calcAllTotal();
    });
});

// chon hoac tat chon tat ca san pham
btnSelectAllProduct.addEventListener('click', function() {
    if(this.checked) {
        btnSelectProduct.forEach(function(item) {
            item.checked = true;
            calcAllTotal();
        });
    }
    else {
        btnSelectProduct.forEach(function(item) {
            item.checked = false;
            calcAllTotal();
        });
    }
});

// -----------------------------------<< js hidden and show element allTotal >>------------------------------
let footerElement = document.getElementById("footer");
let blockAllTotal = document.querySelector('.total');

let overseeFooter = new IntersectionObserver(function(entries) {
    entries.forEach(function(item) {
        if (item.isIntersecting) {
            blockAllTotal.style.position = 'unset';
        }
    });
});

let overseeAllTotal = new IntersectionObserver(function(entries) {
    entries.forEach(function(item) {
        if (item.isIntersecting === false) {
            blockAllTotal.style.position = 'fixed';
        }
    });
});

overseeFooter.observe(footerElement);
overseeAllTotal.observe(blockAllTotal);

// -----------------------------------<< js hidden and show element detail select >>------------------------------
let detailElement = document.querySelectorAll('.cart__product--detail');
let detailSelectElement = document.querySelectorAll('.cart__detail--select');

document.addEventListener('click', function(event) {
    detailElement.forEach(function(item, index) {
        let isClickInside = item.contains(event.target);
        if (isClickInside) {
            detailSelectElement[index].style.display = 'block';
        }
        else {
            detailSelectElement[index].style.display = 'none';
        }
    });
})
