/*=============== SHOW MENU ===============*/

const navMenu =document.getElementById('nav-menu'),
      navToggle =document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    

})
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')


})
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction= ()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n=>n.addEventListener('click', linkAction))




/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('show-scroll')
                       : header.classList.remove('show-scroll')
}
window.addEventListener('scroll', blurHeader)

/*=============== SWIPER FAVORITES ===============*/ 
let swiperFavorite = new Swiper('.favorite-swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    breakpoints:{
        768:{
            slidesPerView: 3,
        }
    }
})




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight= current.offsetHeight,
             sectionTop = current.offsetTop -58,
             sectionId = current.getAttribute('id'),
             sectionClass = document.querySelector('nav-menu a[href*=' + sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
       

       else{
        sectionClass.classList.remove('active-link')
      }        
    })
}
window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
   
})
sr.reveal(`.home-social, .favorite-container, .sponsor-container,.footer`)
sr.reveal(`.home-title span:nth-child(1)`,{origin: 'left', opacity: 1})
sr.reveal(`.home-title span:nth-child(3)`,{origin: 'right', opacity: 1})
sr.reveal(`.home-tooltip, .home-button, .model-button`,{origin: 'bottom'})
sr.reveal(`.about-data`,{origin: 'left'})
sr.reveal(`.about-img, .model-tooltip`,{origin: 'right'})





