const elForm = document.querySelector(".form");
const elInputBefore = elForm.querySelector(".input-before");
const elInputAfter = elForm.querySelector(".input-after");
const elBtnBefore = document.querySelector(".btn-before");
const elBtnAfter = document.querySelector(".btn-after");
const elText = document.querySelector(".list");
const elBtns = document.querySelector(".list-btns");

const arr = ["Olma" , "Banan" , "Mandarin"];

const myFunction = function(){
    arr.forEach((element)=>{
        
        const item = document.createElement("li");
        const text = document.createElement("p");
        text.textContent = element;
        item.appendChild(text);
        
        elText.appendChild(item);
    });
}

myFunction();


elForm.addEventListener("submit" , evt => {
    evt.preventDefault();
    
    elText.innerHTML = "";
    const elInputBeforeValue = elInputBefore.value.trim();
    const elInputAfterValue = elInputAfter.value.trim();
    
    
    if(elInputBeforeValue !== "" && elInputAfterValue !== ""){
        arr.unshift(elInputBeforeValue);
        arr.push(elInputAfterValue)
    }else if(elInputBeforeValue !== "" && elInputAfterValue == "" ){
        arr.unshift(elInputBeforeValue);
    }else if(elInputBeforeValue == "" && elInputAfterValue !== "" ){
        arr.push(elInputAfterValue)
    }else {
        alert("Iltimos biron nima yozing!!!!")
    }
    myFunction();
    elForm.reset();
    
});

elBtns.addEventListener("click" , evt =>{
    
    if(evt.target.matches(".btn-before")){
        elText.innerHTML = "";    
        arr.shift();
        myFunction();
    }else if(evt.target.matches(".btn-after")){
        
        elText.innerHTML = "";
        arr.pop();
        myFunction();
    }
})

