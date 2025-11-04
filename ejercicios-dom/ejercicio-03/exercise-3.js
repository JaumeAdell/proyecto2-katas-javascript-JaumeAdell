//1.1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ulCountries = document.createElement("ul");
countries.forEach((country) => {
  const li = document.createElement("li");
  li.textContent = country;
  ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);
//1.2
const elementToRemove = document.querySelector(".fn-remove-me");
if (elementToRemove) {
  elementToRemove.remove();
}
//1.3
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");

cars.forEach((car) => {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
});

divPrintHere.appendChild(ulCars);
//1.4
const countriesWithImg = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const container = document.createElement("div");

countriesWithImg.forEach((country) => {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  h4.textContent = country.title;
  const img = document.createElement("img");
  img.src = country.imgUrl;
  img.alt = country.title;

  //1.6
  const btnRemoveThis = document.createElement("button");
  btnRemoveThis.textContent = "Eliminar este";
  btnRemoveThis.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(btnRemoveThis);
  container.appendChild(div);
});

document.body.appendChild(container);
//1.5
const btnDeleteLast = document.createElement("button");
btnDeleteLast.textContent = "Eliminar ultimo div";

btnDeleteLast.addEventListener("click", () => {
  const allDivs = container.querySelectorAll("div");
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove();
  }
});

document.body.appendChild(btnDeleteLast);
