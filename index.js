const display = document.querySelector('.container_nav');
const mobileNav = document.querySelector('.mobile_nav');
const mobile_list = document.querySelector('.mobile_list_container');
const webName = document.querySelector('.move_nav');
const alignwebname = document.querySelector('.web_name');
const display_exite = document.querySelectorAll('.mobile_nav_links');
const playing_list = document.querySelectorAll('.list_nav');

for (let list = 0; list < playing_list.length; list++) {
     
function add_player(){
     playing_list[list].classList.toggle('player');
 }
    playing_list[list].addEventListener('click',add_player)
}

    



function remove_class(){
     mobileNav.classList.remove('bigger_mobile_nav');
     alignwebname.classList.remove('align_web_name');
     webName.classList.remove('margin_web_name');
     mobileNav.classList.remove('bigger_mobile_nav');
     display.classList.remove('top_container_nav');
     mobile_list.classList.remove('bottom_mobile_list_container');
   
     
}

for (let index = 0; index < display_exite.length; index++) {
    display_exite[index].addEventListener('click', remove_class)
     
}
function addHeight(){
     alignwebname.classList.toggle('align_web_name');
     webName.classList.toggle('margin_web_name');
     mobileNav.classList.toggle('bigger_mobile_nav');
     display.classList.toggle('top_container_nav');
     mobile_list.classList.toggle('bottom_mobile_list_container');

    
   
}
display.addEventListener('click', addHeight);