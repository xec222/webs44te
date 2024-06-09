document.addEventListener('DOMContentLoaded', function () {
    const text = "Oğuz Sasi |Satranç Oyuncusu | Leesin";
    const typingAnimationElement = document.querySelector('.typing-animation');
    
    let index = 0;
    const speed = 100; // Typing speed in milliseconds
    
    function typeText() {
        if (index < text.length) {
            typingAnimationElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }
    
    typeText();
});
