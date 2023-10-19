Array.from(document.getElementsByTagName('input')).forEach((e , i)=>{
    e.addEventListener('keyup',(e1)=>{
        if(e.value.length){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform ="rotate(180deg)";
        }else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})
let menu_btn = document.getElementsByClassName('bi-three-dots')[0];

menu_btn.addEventListener('click', ()=>{
    menu_bx.classList.toggle('ul_active')
})