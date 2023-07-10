
/* ------------ BUTTON 8 ---------------*/
const button8 = document.querySelectorAll('.button8-link')

button8.forEach(btn =>{
    btn.addEventListener('mouseenter', function(e){
        let x = e.offsetX
        let y = e.offsetY

        let ripples = document.createElement('span')
        ripples.style.left = x + 'px'
        ripples.style.top = y + 'px'

        this.appendChild(ripples)
        console.log(e);

        setTimeout(() => {
            ripples.remove()
        }, 1000)
    })
})






