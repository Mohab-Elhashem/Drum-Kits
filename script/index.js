const containerEL = document.querySelector(".container");               // select container element
const kits = ["crash", "kick", "snare", "tom" ,"finger", "hi-hat"];    // array of the button

kits.forEach((kit) => {
    // make a button element
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    // make an image of background
    btnEl.style.backgroundImage = `url(images/${kit}.png)`;
    containerEL.appendChild(btnEl);
    // make an audio element
    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/${kit}.mp3`;
    containerEL.appendChild(audioEl);
    //make a function to play audio 
    function playDrum() {
        audioEl.currentTime = 0;   // play in current time (don't wait audio to finish)
        audioEl.play();  // audio play
        // add style when click or keydown
        btnEl.style.transform = "scale(.9)";
        btnEl.style.color="pink"
        setTimeout(() => {
            btnEl.style.transform = "scale(1)";
            btnEl.style.color="#fff"
        }, 100);
    }

    btnEl.addEventListener("click", playDrum);

    // window.addEventListener("keydown", (event) => {            // الحل دة مش  هيشتغل لما اجي احول الكيبورد عربي
    //     if (event.key.toLowerCase() === kit.slice(0, 1)) {
    //         playDrum();
    //     }
    // });

    window.addEventListener("keydown", (event) => {    // الافضل استخدام الكود مكان الكي علشان الكود بيجيب مكان الزرار اللي هضغط علية
    const firstLetter = kit.slice(0, 1).toUpperCase(); 
    if (event.code === `Key${firstLetter}`) {
        playDrum();
    }
    });
});


