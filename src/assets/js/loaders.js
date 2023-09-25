/* ------------ LOADER 8 ---------------*/

let outer = document.querySelector(".loader8-link .outer");
let inner = document.querySelector(".loader8-link .inner");
let percent = document.querySelector(".loader8-link span");
let count = 0;

function loader8(){
  
  setInterval( () => {
    if (count == 100) {
      outer.classList.remove("active-loader");
      outer.classList.add("active-loader-2");
    } else {
      count = count + 1;
      percent.textContent = count + "%";
      outer.classList.add("active-loader");
    }
  }, 80);

}

loader8()
