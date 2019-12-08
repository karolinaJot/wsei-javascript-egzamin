document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


// 1 
let sampleClass = document.getElementsByClassName("sample_class");
function getTagsOfElements(elements){
    const arrTags = [];
    for(let i = 0; i < elements.length; i++){
        arrTags.push(elements[i].tagName);
    }
    return arrTags;
}
getTagsOfElements(sampleClass);

// 2 
let idElement = document.getElementById('sample_id');
function getClassesOfElement(element){
    classArray = [];
    element.classList;
    for(let i = 0; i < element.classList.length; i++){
        classArray.push(element.classList[i]);
    }
    return classArray
}
getClassesOfElement(idElement);


// 3 
let listItems = document.querySelectorAll(".sample_class_2 li");

function getInnerTextsOfElements(elements){
    const textArray = [];
    for(let i = 0; i < elements.length; i++){
        textArray.push(elements[i].innerText);
    }
    return textArray;
}
getInnerTextsOfElements(listItems);

// 4 
let links = document.querySelectorAll("a");

function getAddressesOfElements(elements){
    const linksArray = [];
    for(let i = 0 ; i < elements.length; i ++){
        if(elements[i].hasAttribute("href"))
       linksArray.push(elements[i].getAttribute("href"));
    }
    return linksArray; 
}
getAddressesOfElements(links);

// 5 
let sampleClass3 = document.querySelector(".sample_class_3")
let allChildren = sampleClass3.children; 
getTagsOfElements(allChildren);

});
