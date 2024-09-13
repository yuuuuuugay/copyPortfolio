const navMenu = document.querySelector("#navMenu");
const nav = document.querySelector("#nav");
const navClose = document.querySelector("#navClose");

navMenu.addEventListener('click',() => {
    nav.animate(
        {
            top: [0]
        }
        ,
        {
            duration: 500,
            easeing: "ease-in",
            fill: "forwards"
        }
    )
})



navClose.addEventListener('click',() => {
    nav.animate(
        {
            top: ["-100vh"]
        }
        ,
        {
            duration: 500,
            easeing: "ease-in",
            fill: "forwards"
        }
    )
})