document.addEventListener("DOMContentLoaded", function () {
   
    let buttons = document.getElementsByTagName('button');
    let container = document.getElementById('container');
    
   for(let i = 0; i < buttons.length; i++){ 
    buttons[i].addEventListener('click', function (event){
           let dataText = this.dataset.text;
           container.innerText = dataText;
    })}

});