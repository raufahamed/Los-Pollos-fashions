// ---------HAMBURGER MENU--------- /
const main = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

main.addEventListener('click',()=>{
    navbar.classList.toggle('active')
})

// ------CART OPENING AND CLOSING----- //

const carticon = document.querySelector('.carticon')

const cart = document.querySelector('.cart')

const closeCart = document.querySelector('#out')

carticon.addEventListener('click',()=>{

    cart.classList.add('active')
})
closeCart.addEventListener('click',()=>{

    cart.classList.remove('active')
})

