function speakText(text) {
    window.speechSynthesis.cancel(); // Avvalgi gaplashishni bekor qilish
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}

let previousButton = null;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (previousButton) {
            previousButton.disabled = false; // Oldingi tugmani faollashtirish
        }
        speakText(button.textContent);
        button.disabled = true; // Joriy tugmani nofaol qilish
        previousButton = button; // Joriy tugmani oldingi tugma sifatida saqlash
    });
});