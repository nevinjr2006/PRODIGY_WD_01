// Change the navbar's background once the user scrolls past 50px.
window.addEventListener('scroll', () => {const nav=document.getElementById('mainNav');
    if(window.scrollY >50){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});