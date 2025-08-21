// Вывод даты 
let daysNode = document.querySelector(`.days`);
let className = document.querySelectorAll(`.day`);
let container = document.querySelector(`.container`);


for(let i = 28; i <= 30; i++) {
    daysNode.innerHTML += `
    <div class="day other">${i}</div>
    `;

}

for(let i = 1; i < 32; i++) {
    let className;
    
 
  
    if(i <= 10) {
     
        className  += " done";
       
    }

    if(i == 15 || i == 31){
        
        
        className  += " holiday";
        


    } else{
        

        className += " current";
        
       
        
    } 
   
    daysNode.innerHTML += `
    <div class="day current ${className}">${i}</div>
    `;
     
}
daysNode.innerHTML += `
<div class="day other">${1}</div>
`;
container.addEventListener(`click`, function(evt) {
    let node = evt.target;
    if(node.classList.contains(`day`)) {
    node.classList.toggle(`done`);
    }
});