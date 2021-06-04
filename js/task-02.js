const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector("#ingredients")
console.log(ingredientsRef)


const ingredient1 = document.createElement("li")
ingredient1.textContent = "Картошка"

const ingredient2 = document.createElement("li")
ingredient2.textContent = "Грибы"

const ingredient3 = document.createElement("li")
ingredient3.textContent = "Чеснок"

const ingredient4 = document.createElement("li")
ingredient4.textContent = "Помидоры"

const ingredient5 = document.createElement("li")
ingredient5.textContent = "Зелелень"

const ingredient6 = document.createElement("li")
ingredient6.textContent = "Приправы"


ingredientsRef.append(ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6)
