const sizeRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

const inputRef = (event) => {
    if (event.currentTarget.value > 0) {
        const fontValue = event.currentTarget.value
        textRef.style.fontSize = fontValue+"px"
    }
}
sizeRef.addEventListener("input", inputRef)