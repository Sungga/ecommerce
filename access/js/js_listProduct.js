// --------------------<< SHOW HISTORY SEARCH WHEN USER FOCUS TO SEARCH SEARCH >>----------------
let openFilter = document.querySelector('.listProduct__bottom--iconMenu');
let closeFilter = document.querySelector('.listProduct__bottom--iconClose');
let listFilter = document.querySelector('.istProduct__bottom--left');

openFilter.addEventListener('click', function() {
    listFilter.style.display = 'block';
})

closeFilter.addEventListener('click', function() {
    listFilter.style.display = 'none';
})