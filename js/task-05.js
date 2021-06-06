let inputRef = document.getElementById("name-input");
let outputRef = document.getElementById("name-output");


inputRef.onchange = () => {
    if (inputRef.value === "") {
        outputRef.innerHTML = "незнакомец";
    }
 
    else {
        outputRef.innerHTML = inputRef.value;

    }
}