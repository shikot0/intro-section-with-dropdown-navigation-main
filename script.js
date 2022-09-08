const dropdownHeaders = document.querySelectorAll('.dropdown-header');
const showMenuBtn = document.getElementById('show-menu-button'); 
const nav = document.querySelector('nav');

showMenuBtn.addEventListener('click', () => {
    if(nav.classList.contains('nav-visible')) {
        nav.classList.remove('nav-visible');
        showMenuBtn.innerHTML = `<img src="images/icon-menu.svg" alt="">`;
    }else {  
        nav.classList.add('nav-visible');
        showMenuBtn.innerHTML = `<img src="images/icon-close-menu.svg" alt="">`;
    }
})

dropdownHeaders.forEach(dropdownHeader => {
    dropdownHeader.addEventListener('click', () => {
        if(dropdownHeader.id) {
            dropdownHeader.removeAttribute('id')
        }else {
            dropdownHeader.setAttribute('id', 'visible') 
        }
    })
})
