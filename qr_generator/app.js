const input = document.querySelector(".qr-input");
const btn = document.querySelector(".qr-button");
const img = document.querySelector(".qr-img");

btn.addEventListener("click" , ()=>{
    const inputValue = input.value;

    if (inputValue === "") {
        alert("Enter A Value");
        return;
    }
    else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    }
})