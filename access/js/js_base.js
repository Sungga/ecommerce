// Ham thay doi gai tri display
export function setDisplay(elementClick, elementSetDisplay, display) {
    elementClick.addEventListener('click', function() {
        elementSetDisplay.style.display = `${display}`;
    });
}

// Ham chuyen dang tien sang dang so
export function convertMoneyIntoInt(moneyElement) {
    return parseInt(moneyElement.replace(/[^\d]/g, ''));
}

// Ham chuyen dang so sang dang tien
export function convertIntIntoMoney(intElement) {
    return `${parseInt(intElement).toLocaleString('vi-VN')} đ`;
}