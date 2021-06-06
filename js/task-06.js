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


inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length  < 6) {
    event.currentTarget.classList.add("invalid")
  } else {
    if (event.currentTarget.value.length >= 6) {
      event.currentTarget.classList.remove("invalid");
      event.currentTarget.classList.add("valid")
    }
    }
    }
  )




