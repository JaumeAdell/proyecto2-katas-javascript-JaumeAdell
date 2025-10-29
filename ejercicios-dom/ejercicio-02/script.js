//2.1//
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);
//2.2//
const divConP = document.createElement("div");
const pDentro = document.createElement("p");
pDentro.textContent = "Soy un parrafo dentro de un div";
divConP.appendChild(pDentro);
document.body.appendChild(divConP);
//2.3//
const divCon6P = document.createElement("div");

for (let i=1; i <= 6; i++) {
    const p = document.createElement("p");
    p.textContent = `Parrafo ${i}`;
    divCon6P.appendChild(p);
}

document.body.appendChild(divCon6P);
//2.4//
const pDinamico = document.createElement("p");
pDinamico.textContent = "Soy dinamico!";
document.body.appendChild(pDinamico);
//2.5//
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";
//2.6//
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for (const app of apps){
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);
//2.7//
const elementosAEliminar = document.querySelectorAll(".fn-remove-me");

elementosAEliminar.forEach(el => el.remove());
//2.8//
const divs = document.querySelectorAll("div");
const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio";

divs[0].insertAdjacentElement("afterend", pMedio);
//2.9//
const divDentro = document.querySelectorAll(".fn-insert-here");

divDentro.forEach(div => {
    const p = document.createElement("p");
    p.textContent = "Voy dentro";
    div.appendChild(p);
});
