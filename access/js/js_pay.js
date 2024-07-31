import { setDisplay } from './js_base.js';

// --------------------<< js for show list voucher >>--------------------
let btnOpenListVoucher = document.querySelectorAll('.voucher__shop--change');
let listVoucher = document.querySelectorAll('.voucher__shop--list');

btnOpenListVoucher.forEach(function(item, index) {
    setDisplay(item, listVoucher[index], "block");
});

document.addEventListener('click', function(event) {
    btnOpenListVoucher.forEach(function(item, index) {
        let isClickListVoucher = btnOpenListVoucher[index].contains(event.target) || listVoucher[index].contains(event.target);
        if(!isClickListVoucher) {
            listVoucher[index].style.display = 'none';
        }
    });
});

// --------------------<< js for show list ship >>--------------------
let btnOpenListShip = document.querySelectorAll('.ship__change');
let listShip = document.querySelectorAll('.ship__list');
let listShipContainer = document.querySelectorAll('.ship__list--container');

btnOpenListShip.forEach(function(item, index) {
    setDisplay(item, listShip[index], "flex");
});

listShip.forEach(function(item, index) {
    item.addEventListener('click', function(event) {
        let isClickListShipContainer = listShipContainer[index].contains(event.target);
        if(!isClickListShipContainer) {
            listShip[index].style.display = 'none';
        }
    });
});

// ----------------------<< js for show list main voucher >>-------------------------
let btnOpenListMainVoucher = document.querySelector('.pay__voucher--main > p:nth-child(2)');
let listMainVoucher = document.querySelector('.pay__voucherMain--list');
let listMainVoucherContainer = document.querySelector('.pay__voucherMainList--container');

setDisplay(btnOpenListMainVoucher, listMainVoucher, "flex");

listMainVoucher.addEventListener('click', function(event) {
    let isClickLlistMainVoucherContainer = listMainVoucherContainer.contains(event.target);
    if(!isClickLlistMainVoucherContainer) {
        listMainVoucher.style.display = 'none';
    }
});

// ------------------<< js focus int to money >>---------------------
