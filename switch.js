const checkBox = document.getElementById('checkbox');
let aside = document.querySelector('aside');
let main = document.querySelector('main')
let menu = document.querySelector('.menu')
checkBox.addEventListener('change', changeTheme);

function changeTheme() {
    aside.classList.toggle('light');
    main.classList.toggle('light');
    menu.classList.toggle('menu_light')
        // for (let i = 0; i > menu.length; i++) {
        //     menu.classList.toggle('menu_light');
        // }

}