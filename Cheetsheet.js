let logo = document.getElementById("logo");
let scrollbar = document.getElementById("scroll");
scrollbar.style.display = 'none';

logo.addEventListener('click',() => {

    scrollbar.style.display = '';
    // console.log(scrollbar);
})

let rm = document.getElementById('rmLogo');
rm.addEventListener("click", ()=>{
    scrollbar.style.display = 'none';
})

console.log(rm);

