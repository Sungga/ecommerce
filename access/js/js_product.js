// js for img product   
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

// js for sub and add quantity
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

