// -------------------------------<< MOVE THE SLIDER >>-------------------------------------
let boxSlider = document.querySelector('.slider');
let imgSlider = document.querySelectorAll('.sliderImg');
let imgShowIndex;
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

function showSlider(imgShow){
    if(imgSlider.length == 0) {
        boxSlider.innerHTML += '<a href="#"><img class="sliderImg" src="./access/img/sliderEmpty.png" alt="nếu bạn muốn đặt quảng cáo, hãy liên hệ với chúng tôi!"></a>';
    }
    else {
        for(i = 0; i < imgSlider.length; i++) {
            imgSlider[i].style.left = (i - imgShow) * 100 + "%";
        }
    }
    return imgShow;
}

function showMoveSliderBtn(imgShowIndex) {
    if(imgShowIndex == 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
    }
    else if(imgShowIndex == imgSlider.length - 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
    }
    else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

function createDot() {
    let html = '';
    for(i = 0; i < imgSlider.length; i++) {
        html += '<div class="dot"></div>';
    }
    let boxDot = document.querySelector('.box_dot');
    boxDot.innerHTML = html;
}

function highlightDot(imgShowIndex) {
    let dots = document.querySelectorAll('.dot');
    dots.forEach(function(dot) {
        dot.classList.remove('dot-select');
    });
    dots[imgShowIndex].classList.add('dot-select');
}

function clickMoveLeftSlider() {
    prevBtn.addEventListener('click', function() {
        if(imgShowIndex > 0) {
            imgShowIndex--;
        
            showSlider(imgShowIndex);
            showMoveSliderBtn(imgShowIndex);
            highlightDot(imgShowIndex);
        }
    });
}

function clickMoveRightSlider() {
    nextBtn.addEventListener('click', function() {
        if(imgShowIndex < imgSlider.length - 1) {
            imgShowIndex++;
        
            showSlider(imgShowIndex);
            showMoveSliderBtn(imgShowIndex);
            highlightDot(imgShowIndex);
        }
    });
}

imgShowIndex = showSlider(0);
showMoveSliderBtn(imgShowIndex);
createDot();
highlightDot(imgShowIndex);

clickMoveLeftSlider();
clickMoveRightSlider();

setInterval(function(){
    if(imgShowIndex == imgSlider.length - 1) {
        imgShowIndex = 0;
    }
    else {
        imgShowIndex++;
    }

    showSlider(imgShowIndex);
    showMoveSliderBtn(imgShowIndex);
    highlightDot(imgShowIndex);
}, 10000);

let dots = document.querySelectorAll('.dot');
dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        imgShowIndex = showSlider(index);
        showMoveSliderBtn(index);
        highlightDot(index);
    })
});


