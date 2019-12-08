document.addEventListener("DOMContentLoaded", function () {
   
    let buttons = document.getElementsByTagName('button');
    let button1 = document.getElementById('button-1');
    let button2 = document.getElementById('button-2');
    let button3 = document.getElementById('button-3');
    let shoppingList = document.getElementById('shopping-list');
    let secondProduct = shoppingList.getElementsByTagName('li')[1];
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(event){
            if(this === button1){
                let newLi = document.createElement('li');
                newLi.appendChild(document.createTextNode('Chleb'));
                shoppingList.appendChild(newLi);
            }
            else if (this === button2){
               shoppingList.removeChild(shoppingList.lastChild);
            }
            else if (this === button3){
                clonedProduct = secondProduct.cloneNode(true);
                shoppingList.appendChild(clonedProduct);
            }
        })
    }



});