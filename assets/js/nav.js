//let navMain = document.getElementById("#nav_main");
console.log("red");
let burgers = Array.from(document.querySelectorAll(".burger"));
burgers.forEach((element) =>{
    element.addEventListener("click", () => {
        console.log("blue");
        document.querySelector(".mobile_nav").classList.toggle("visible");
    });
})