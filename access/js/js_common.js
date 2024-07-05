// --------------------<< SHOW HISTORY SEARCH WHEN USER FOCUS TO SEARCH SEARCH >>----------------
let searchBtn = document.querySelector('.header__header-bottom--center input');
let historySearch = document.querySelector('.search-history');

searchBtn.addEventListener('focus', function() {
    historySearch.style.display = 'block';
})

searchBtn.addEventListener('blur', function() {
    historySearch.style.display = 'none';
})