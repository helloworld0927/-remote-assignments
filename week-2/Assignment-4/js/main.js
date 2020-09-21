//Request 1: Click to Change Text.
//Way 1
// function changeText() {
//     var change = document.getElementById("banner_text");
//     if (change.innerHTML == "Welcome Message") {
//         change.innerHTML = "Have a Good Time!";
//     } else {
//         change.innerHTML = "Welcome Message";
//     }
// }

//Way 2
let btn = {
    change: () => {
        bannerText.textContent = "Have FUN!"
    },
    open: () => {
        document.querySelector('.sidenav_open').style.right = 0;
    },
    close: () => {
        document.querySelector('.sidenav_open').style.right = '-100%';
    },
    action: () => {
        document.querySelector(".second").classList.toggle("hidden");
    }
}

const bannerText = document.querySelector('.banner_text');
bannerText.addEventListener('click', btn.change, false);

const open = document.querySelector('.sidenav');
open.addEventListener('click', btn.open, false);

const close = document.querySelector('.closeBtn');
close.addEventListener('click', btn.close, false);

const action = document.querySelector('.main_button');
action.addEventListener('click', btn.action, false);
