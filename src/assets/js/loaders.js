/* ------------ LOADER 8 ---------------*/

function loader8(){

  let outer = document.querySelector(".loader8-link .outer");
  let percent = document.querySelector(".loader8-link span");
  let count = 0;
  
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

/* ------------ LOADER 36 ---------------*/

function progress(){
  let percent = document.querySelector('.percent');
  let progress = document.querySelector('.progress');
  let text = document.querySelector('.text');
  let count = 0;
  let per = 0;
  let loading = setInterval(animate, 50);
  function animate(){
    if(count == 100 && per == 200){
      percent.classList.add("text-blink");
      text.style.display = "block";
      clearInterval(loading);
      
    }else{
      per = per + 2;
      count = count + 1;
      progress.style.width = per + 'px';
      percent.textContent = count + '%';
    }
  }
}

progress();
