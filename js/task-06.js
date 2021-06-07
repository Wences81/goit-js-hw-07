// const inputRef = document.querySelector("#validation-input");
// const dataRef = inputRef.dataset.length;


// const inputBlur = (event) => {

//     if (event.currentTarget.value.length == dataRef) {

//         inputRef.classList.add("#validation-input.valid")
//         inputRef.classList.remove("#validation-input.invalid")


//     } else if (event.currentTarget.value.length != dataRef) {

//         inputRef.currentTarget.classList.add("#validation-input.invalid");
//         inputRef.currentTarget.classList.remove("#validation-input.valid");
            
        
//     }

    
// };

// inputRef.addEventListener("blur", inputBlur);



const inputRef = document.querySelector("#validation-input");

const lengthRef = inputRef.dataset.length;


const oninputBlur = (event) => {

  if (event.currentTarget.value.length == lengthRef) {
    inputRef.classList.add("valid")
    inputRef.classList.remove("invalid");

  } else if (event.currentTarget.value.length != lengthRef) {

    inputRef.classList.add("invalid")
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", oninputBlur);
    
  




