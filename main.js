const header = document.querySelector('.head');
const menu = document.querySelector('.icon-menu')
const close = document.querySelector('.icon-close')

menu.addEventListener('click', () => {
    header.classList.add('active')
})

close.addEventListener('click', () => {
    header.classList.remove('active')
})