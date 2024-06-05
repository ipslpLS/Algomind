const mode = localStorage.getItem("mode") || "";
console.log("Mode: " + mode);
const bodytwo = document.querySelector("html");
var before = 1;
if( mode === "dark" )
{
    bodytwo.classList.toggle("dark");
    before = 0;
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Mode: local " + mode)
    const Toggle = document.querySelector(".theme-toggle");
    const body = document.querySelector("html");
    const circle = document.querySelector(".ball");
    if( mode === "dark" && before === 1 )
    {
        body.classList.toggle("dark");
    }

    Toggle.addEventListener("click", () => {
        localStorage.setItem("mode", mode === "dark" ? "" : "dark");
        body.classList.toggle("dark");
    });
});