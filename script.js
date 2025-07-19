const surprises = [
    `<span class="heart">❤️</span><br>
    Sarmistha, every time I see your name, my heart smiles.<br>
    <span style="font-size:1.5rem;">🌹</span>`,
    `<img src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif" alt="Cute" style="width:110px;border-radius:12px;"><br>
    Your smile is my favorite thing in the world! <span class="heart">🥰</span>`,
    `<span style="font-size:2rem;">💌</span><br>
    I feel so lucky to have met you, even if it's just been a few days.<br>
    Can't wait to make more memories together!`,
    `<span style="font-size:2rem;">🌟</span><br>
    You are truly special, Sarmistha.<br>
    Thank you for being you. <span class="heart">💖</span>`
];

function showSurprise(idx) {
    const box = document.getElementById('surprise-box');
    box.style.opacity = 0;
    setTimeout(() => {
        box.innerHTML = surprises[idx];
        box.style.opacity = 1;
    }, 200);
}
