/* ------------ FORM 1 ---------------*/

document.querySelector(".card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerText =
    document.querySelector(".card-number-input").value;
  if (document.querySelector(".card-number-input").value == 0) {
    document.querySelector(".card-number-box").innerText =
      "**** **** **** ****";
  }
};

document
  .querySelector(".card-number-input")
  .addEventListener("input", function () {
    const inputValue = this.value.replace(/\s/g, ""); // quitamos todos los espacios encontrados...
    if (inputValue !== "") {
      const result = inputValue.match(/.{1,4}/g).join(" "); // y agregamos un espacio cada 4 caracteres, uso join(" ") para quitar las comas...
      this.value = result; // Y el valor del input será la cadena modificada.
    }
  });

document.querySelector(".card-holder-input").oninput = () => {
  document.querySelector(".card-holder-name").innerText =
    document.querySelector(".card-holder-input").value;
};

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value;
};

document.querySelector(".cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};

function SoloNumbers(evt) {
  if (window.event) {
    keynum = evt.keyCode;
  } else {
    keynum = evt.which;
  }

  if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13) {
    return true;
  } else {
    alert("solo numeros");
  }
}

/* ------------ FORM 3 ---------------*/

const sign_in_btn = document.querySelector(".form3 #sign-in-btn");
const sign_up_btn = document.querySelector(".form3 #sign-up-btn");
const container = document.querySelector(".form3 .container");
const sign_in_btn2 = document.querySelector(".form3 #sign-in-btn2");
const sign_up_btn2 = document.querySelector(".form3 #sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

/* ------------ FORM 6 ---------------*/

const signUpButton = document.querySelector(".form6 #signUp");
const signInButton = document.querySelector(".form6 #signIn");
const main = document.querySelector(".form6 #main");

signUpButton.addEventListener("click", () => {
  main.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  main.classList.remove("right-panel-active");
});
