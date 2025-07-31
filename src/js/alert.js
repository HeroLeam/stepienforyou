const alerts = [
    {
        text: "Lembre-se de enviar HeartMe e resgatar seus pontos! Não perca!",
        class: "msg1",
        img: "src/images/heartme.webp",
        alt: "Heart Me",
        tag: "1/3"
    },
    {
        text: "Fale ao vivo! Use o LivePIX e mande seu recado! Link na Bio!",
        class: "msg2",
        img: "src/images/livePixIcon.svg",
        alt: "LivePIX",
        tag: "2/3"
    },
    {
        text: "Junte-se ao nosso Discord e fique mais perto da live! Link na Bio!",
        class: "msg3",
        img: "src/images/discordIcon.svg",
        alt: "Discord",
        tag: "3/3"
    }
];

const displaySeconds = 7; // cada mensagem visível (teste)
const pauseMinutes = 5; // pausa depois das 3 mensagens

const displayMs = displaySeconds * 1000;
const pauseMs = pauseMinutes * 60 * 1000;

const box = document.getElementById("message");
const iconImg = document.getElementById("iconImg");
const textEl = document.getElementById("text");
const labelEl = document.getElementById("label");
const subEl = document.getElementById("sub");
const progressEl = document.getElementById("progress");

function showAlert(a) {
    box.className = "message-box " + a.class + " visible";
    void box.offsetWidth;
    box.classList.add("pop");

    iconImg.src = a.img;
    iconImg.alt = a.alt;
    iconImg.style.display = ""; // caso tenha sido escondido por erro anterior

    textEl.textContent = a.text;
    labelEl.textContent = a.tag;
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
