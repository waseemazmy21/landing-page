/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list')
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(elem){
    const rect = elem.getBoundingClientRect();
    if(rect.y >= 0 && rect.y <= window.innerHeight - rect.height){
       return true
    }else{
        return false
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


for(let i = 0; i < sections.length;i++){
    const linkText = sections[i].getAttribute('data-nav');
    const linkId = sections[i].getAttribute('id')
    addNavMenuItem(linkText,linkId);
}
function addNavMenuItem(text,id){
    const li = document.createElement('li');
    const a =document.createElement('a');
    a.textContent = text;
    a.setAttribute('href',`#${id}`)
    a.classList.add('menu__link')
    li.appendChild(a);
    fragment.appendChild(li)
}

navbarList.appendChild(fragment)

// Add class 'active' to section when near top of viewport


window.addEventListener('scroll',()=>{
    sections.forEach((elem)=>{
        if(isInViewport(elem)){
            elem.classList.add('your-active-class')
        }else{
            elem.classList.remove('your-active-class')
        }
    })
},{ passive: true })

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll('.menu__link');
for(let link of links){
    link.addEventListener('click',smoothScroll)
}
function smoothScroll(event){
    event.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({behavior: 'smooth'})
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


