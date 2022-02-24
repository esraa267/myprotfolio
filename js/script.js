const menu = document.getElementById('menu');
const action = document.getElementById('action');
function HandelMenu(){
menu.classList.toggle("is-active");
action.classList.toggle("is-active");
}
menu.addEventListener('click',()=>{
HandelMenu();
})
