// --------------------<< SHOW HISTORY SEARCH WHEN USER FOCUS TO SEARCH SEARCH >>----------------
let searchBtn = document.querySelector('.header__header-bottom--center input');
let historySearch = document.querySelector('.search-history');
let menu = document.querySelector('.menu__box');
let openmenu = document.querySelector('.icon_menu');
let exitmenu = document.querySelector('.icon_exit');
let search = document.querySelector('.menu__box icon_search i');

searchBtn.addEventListener('focus', function() {
    historySearch.style.display = 'block';
})

searchBtn.addEventListener('blur', function() {
    historySearch.style.display = 'none';
})

// --------------------<< SHOW MENU >>----------------
openmenu.addEventListener('click', function(){
    menu.style.display = 'block';
})

// --------------------<< EXIT MENU >>----------------
exitmenu.addEventListener('click', function(){
    menu.style.display = 'none';
})

// --------------------<< OPEN SEARCH >>----------------
search.addEventListener('click', function(){
    searchBtn.style.display = 'block';
})

// --------------------<< thoát ô tìm kiếm >>----------------
document.addEventListener('click', function(event) {
    var isClickInside = search.contains(event.target) || searchBtn.contains(event.target);
    if (!isClickInside) {
        searchBtn.style.display = 'none';
    }
})