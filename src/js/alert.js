const alerts = [
    // {
    //     text: "Amanhã (02/08) tem BATALHA às 19h! Não perca!",
    //     class: "msg1",
    //     img: "src/images/battle.png",
    //     alt: "Battle"
    // },
    {
        text: "Lembre-se de enviar HeartMe e resgatar seus pontos! Não perca!",
        class: "msg2",
        img: "src/images/heartme.webp",
        alt: "Heart Me"
    },
    {
        text: "Fale ao vivo! Use o LivePIX e mande seu recado! Link na Bio!",
        class: "msg3",
        img: "src/images/livePixIcon.svg",
        alt: "LivePIX"
    },
    {
        text: "Vem pro Discord e participe da comunidade! Link na Bio!",
        class: "msg4",
        img: "src/images/discordIcon.svg",
        alt: "Discord"
    },
    {
        text: "Digite !pontos no chat para ver quantos pontos você tem na live",
        class: "msg5",
        img: "src/images/coinTikTok.svg",
        alt: "Pontos"
    },
    {
        text: "Use seus pontos da live e digite: !play Artista Música (ex: !play Coldplay Viva La Vida)",
        class: "msg6",
        img: "src/images/spotifyIcon.svg",
        alt: "Música"
    },
    {
        text: "Veja o ranking diário e mensal de taps da live no meu site! Link na Bio!",
        class: "msg7",
        img: "src/images/rankIcon.svg",
        alt: "Rank"
    }
];

const displaySeconds = 7; // cada mensagem visível (teste)
const pauseMinutes = 5; // pausa depois das 3 mensagens

const displayMs = displaySeconds * 1000;
const pauseMs = pauseMinutes * 60 * 1000;

const box = document.getElementById("message");
const iconImg = document.getElementById("iconImg");
const textEl = document.getElementById("text");
const subEl = document.getElementById("sub");
const progressEl = document.getElementById("progress");

function showAlert(a) {
    box.className = "message-box " + a.class + " visible";
    void box.offsetWidth;
    box.classList.add("pop");

    iconImg.src = a.img;
    iconImg.alt = a.alt;
    iconImg.style.display = "";

    textEl.textContent = a.text;
    subEl.textContent = "";

    progressEl.style.transition = "none";
    progressEl.style.width = "0%";
    void progressEl.offsetWidth;
    progressEl.style.transition = `width ${displayMs}ms linear`;
    progressEl.style.width = "100%";
}

function runSequence() {
    console.log("Iniciando sequência de avisos:", new Date().toLocaleTimeString());

    alerts.forEach((a, idx) => {
        setTimeout(() => {
            showAlert(a);
            setTimeout(() => box.classList.remove("pop"), 500);
        }, idx * displayMs);
    });

    const sequenceDuration = alerts.length * displayMs;

    setTimeout(() => {
        box.classList.remove("visible", "pop", "msg1", "msg2", "msg3");
        progressEl.style.width = "0%";
        console.log(`Sequência completa. Pausa de ${pauseMinutes} minutos começa às`, new Date().toLocaleTimeString());
        setTimeout(runSequence, pauseMs);
    }, sequenceDuration);
}

runSequence();