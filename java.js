const container = document.querySelector("#container");
container.style.display = "flex";
container.style.width = "960px";
container.style.height = "960px";
container.style.margin = "auto";
container.style.flexWrap = "wrap";



function createSquare(div) {
    const sqr = document.createElement("div");
    sqr.style.display = "flex";
    sqr.style.flexGrow = "1";
    sqr.style.borderWidth = "1px";
    sqr.style.borderStyle = "solid";
    sqr.style.borderColor = "black";
    sqr.style.backgroundColor = "cyan";
    sqr.classList.add("square");
    sqr.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "black";
    });
    div.appendChild(sqr);
    
}


function createRow(int){
    const row = document.createElement("div");
    for (let i = 0; i < int; i++) {
        createSquare(row);
        row.style.display = "flex";
        row.style.width = "100%";
    }
    container.appendChild(row);
}


function createGrid(int) {
    for (let i = 0; i < int; i++) {
    createRow(int);
    }
}

const btn = document.querySelector("#btn");

createGrid(16);

btn.addEventListener("click", () => {
    let choice = prompt("Enter a number between 1 and 100");
    choice = Number(choice);
    if (choice < 1 || choice > 100 || Number.isInteger(choice) === false) {
        alert("Invalid choice. Try again.");
    }
    else {
        container.innerHTML = "";
        createGrid(choice);  
    }
});



