console.log('ciao')
const latoGriglia = 10
const griglia = (latoGriglia * latoGriglia)
console.log(griglia)
const box= document.querySelector('.box')
for (i=0; i<griglia; i++){
    console.log('numero')
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "Questo è un nuovo div.";
    box.appendChild(newDiv);
}

