
const itemRef = document.querySelectorAll(".item");

console.log(`В списке ${itemRef.length} категории.`)


itemRef.forEach((element)=> {
    console.log(`Категория: ${element.firstElementChild.textContent}`);

    console.log(`Количество злементов: ${element.querySelectorAll("li").length}`);
    
});
    



           
  
    
        



    





