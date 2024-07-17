// --------------------<< SHOW HISTORY SEARCH WHEN USER FOCUS TO SEARCH SEARCH >>----------------
let btnOpenFilter = document.querySelector('.listProduct__bottom--iconMenu');
let btnCloseFilter = document.querySelector('.listProduct__bottom--iconClose');
let listFilter = document.querySelector('.listProduct__bottom--left');

console.log(btnOpenFilter);

btnOpenFilter.addEventListener('click', function() {
    listFilter.style.display = 'block';
})

btnCloseFilter.addEventListener('click', function() {
    listFilter.style.display = 'none';
})