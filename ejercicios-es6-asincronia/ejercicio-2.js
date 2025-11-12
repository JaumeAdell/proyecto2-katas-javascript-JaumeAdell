//2.1
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);
//2.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = {...toy};
console.log(toyCopy);
//2.3
const pointsLis = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const allPoints = [...pointsLis, ...pointsLis2];
console.log(allPoints);
//2.4
const toys = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toysUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const updatedToy = {...toys, ...toysUpdate};
console.log(updatedToy);
//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy);
console.log(colors);