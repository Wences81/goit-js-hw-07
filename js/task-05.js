let inputRef = document.getElementById("name-input");
let outputRef = document.getElementById("name-output");


inputRef.oninput = () => {
    if (inputRef.value === "") {
        outputRef.innerHTML = "незнакомец";
    }
 
    else {
        outputRef.innerHTML = inputRef.value;

    }
}