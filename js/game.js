console.log('ciao')
const latoGriglia = prompt('8 liv facile 10 liv difficile')
const griglia = (latoGriglia * latoGriglia)
console.log(griglia)
const box= document.querySelector('.box')
let celleEl = document.querySelectorAll('.cella')
console.log(celleEl)
let newDiv
//creo struttura griglia 
for (i=0; i<griglia; i++){
    const numero = i+1 
    console.log('numero')
    const newDiv = document.createElement("div");
    newDiv.classList.add("cella");
    newDiv.innerHTML = numero;
    box.appendChild(newDiv);

    newDiv.addEventListener('click', function () {
		console.log('ciao')
	})
}

