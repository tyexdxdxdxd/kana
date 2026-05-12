const bg2 = document.getElementById("bg2");
const card = document.getElementById("card");
const music = document.getElementById("music");
const lyrics = document.getElementById("lyrics");

const startTime = 35;

// 💜 sua letra
const lines = [
    { time: 35, text: "love love love love" },
    { time: 38, text: "love love love love" },
    { time: 42, text: "love love love love" },
    { time: 46, text: "love love love love" }
];

// fundo troca
setTimeout(() => {
    bg2.style.opacity = "1";
}, 4000);

// inicia tudo
setTimeout(() => {

    card.classList.add("show");

    music.currentTime = startTime;
    music.play();

    let i = 0;

    music.ontimeupdate = () => {

        if(i < lines.length && music.currentTime >= lines[i].time){
            lyrics.innerText = lines[i].text;
            i++;
        }

    };

}, 4000);