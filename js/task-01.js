
const itemRef = document.querySelectorAll(".item");

console.log(`В списке ${itemRef.length} категории.`)




const categoriesRef = [...itemRef]

    .map(

        categories => 
            `Категория: ${categories.children[0].textContent}
   Количество злементов: ${categories.children[1].children.length}`
    
        )


.join("\n");
    
console.log(categoriesRef)




