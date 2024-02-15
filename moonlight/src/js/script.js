//  Переменные с классами и id элементов HTML

const anchors = document.querySelectorAll('a[href*="#"]');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

//  Обработчики событий

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1 + 'px';
    treeRight.style.left = value * 1 + 'px';
    gateLeft.style.left = value * -0.5 + 'px';
    gateRight.style.left = value * 0.5 + 'px';
});

// Smooth scroll and pageup

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').slice(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn-up__hide') && !this.el.classList.contains('btn-up__hiding')) {
            this.el.classList.remove('btn-up__hide');
            this.el.classList.add('btn-up__hiding');
            window.setTimeout(() => {
                this.el.classList.remove('btn-up__hiding');
            }, 300);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn-up__hide') && !this.el.classList.contains('btn-up__hiding')) {
            this.el.classList.add('btn-up__hiding');
            window.setTimeout(() => {
                this.el.classList.add('btn-up__hide');
                this.el.classList.remove('btn-up__hiding');
            }, 300);
        }
    },
    addEventListener() {
        // при прокрутке окна (window)
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
                return;
            }
            this.scrolling = false;
            // если пользователь прокрутил страницу более чем на 400px
            if (scrollY > 400) {
                // сделаем кнопку .btn-up видимой
                this.show();
            } else {
                // иначе скроем кнопку .btn-up
                this.hide();
            }
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            this.scrolling = true;
            this.hide();
            // переместиться в верхнюю часть страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
};

btnUp.addEventListener();