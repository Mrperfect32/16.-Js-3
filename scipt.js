let onbtn =document.querySelector('.On');

let image = document.querySelector('.img');


onbtn.addEventListener('click',  function(){
    

               image.src = "https://www.w3schools.com/js/pic_bulbon.gif"
    
})


let off = document.querySelector('.off');

off.addEventListener('click', function(){
    image.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})





let random = document.querySelector('#random');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){

    let red = Math.round(Math.random() * 255); //102
    let green = Math.round(Math.random() * 255); //77
    let blue = Math.round(Math.random() * 255);   //61




    random.style.background = `rgb(${red}, ${green}, ${blue})`
})





