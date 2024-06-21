const section = document.querySelector("section");

for (let i = 1; i < 101; i++) {
    const button = document.createElement("button");
    button.innerText = i
    button.style.width = "80px"
    button.style.height = "80px"
    button.style.border = "2px solid white" 
    button.style.color = "white";
    button.style.backgroundColor = i % 2 === 0 ? " #a93226 " : " #2980b9 "
    button.style.color = i %5 === 0 ? " #36ff00 " : "white";
    button.style.margin = "4px"

    section.appendChild(button)
}


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('div > span');

spans.forEach((span, index) => {
    span.style.color = colors[index];
});
    