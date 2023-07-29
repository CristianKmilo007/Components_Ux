
/* ------------ CARD 1 ---------------*/

const img = document.querySelector(".card1 img");
const icons = document.querySelector(".card1 .icons");

img.addEventListener('click', function(){
    this.classList.toggle("active");
    icons.classList.toggle("active");
})


/* ------------ CARD 3 ---------------*/

VanillaTilt.init(document.querySelector(".card3 .container"), {
  max: 15,
  speed: 200,
});


/* ------------ CARD 5 ---------------*/

VanillaTilt.init(document.querySelector(".card5 .box"), {
  max: 15,
  speed: 200,
  glare: true,
  "max-glare": .4,
});

/* $('.card5').mousemove(function(p){
    
    let rotateX = -($('.rrr').innerWidth()/2-p.offsetX)/20;
    let rotateY = -($('.rrr').innerHeight()/2-p.offsetY)/10;
    console.log(p.offsetX, p.offsetY);
    console.log('wit:' + $('.card5').innerWidth(), $('.card5').innerHeight());
    $('.card5 .card').css("transform","rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)");
  });
  $(document).mouseout(function(){
    $('.card5 .card').css("transform","");
  });

/* let card = $('.card5')
console.log(card.innerWidth());
console.log(card.offsetTop); */