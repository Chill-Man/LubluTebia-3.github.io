const answers_no = {
    russian: [
        "Нет",
        "Ты уверена?",
        "Ты прям точно уверена??",
        "На все 100%???",
        "Думаю, все заслуживают второй шанс...",
        "Не веришь во второй шанс?",
        "Почему ты такая холодная?",
        "Может, обсудим?",
        "Я больше не буду просить!",
        "Эй, ну почему...",
        "...почему ты такая злая((",
        "Зачем ты это делаешь?",
        "Пожалуйста, дай мне шанс!",
        "Ты какашка.",
        "Ладно, давай начнём сначала..."
    ]
};

answers_yes = {
    "russian": "Да"
}

let language = "russian"; // Язык изменён на русский
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

// Обновляем начальные тексты на русский
document.getElementById("question-heading").textContent = "Будешь моей валентинкой?";
document.getElementById("success-message").textContent = "Урааа!!! Скоро увидимся :3";
yes_button.innerHTML = answers_yes[language];
no_button.innerHTML = answers_no[language][0];