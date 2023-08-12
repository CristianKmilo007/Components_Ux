/* ------------ FORM1 1 ---------------*/

document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
    if(document.querySelector('.card-number-input').value == 0){
        document.querySelector('.card-number-box').innerText = '**** **** **** ****'
    }
}

document.querySelector('.card-number-input').addEventListener("input", function() {
    const inputValue = this.value.replace(/\s/g, ""); // quitamos todos los espacios encontrados...
    if (inputValue !== "") {
      const result = inputValue.match(/.{1,4}/g).join(" "); // y agregamos un espacio cada 4 caracteres, uso join(" ") para quitar las comas...
      this.value = result; // Y el valor del input será la cadena modificada.
    }
  });

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

function SoloNumbers(evt){
    if(window.event){
        keynum = evt.keyCode
    }else{
        keynum = evt.which
    }

    if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13){
        return true
    }else{
        alert('solo numeros')
    }
}