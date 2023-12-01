const openup = document.getElementById("Submit");
const closeup = document.getElementById("Close");
const pop = document.getElementById("pop");


openup.addEventListener("click",() => {
    pop.classList.add("open");

});

closeup.addEventListener("click",() => {
    pop.classList.remove("open");

});
