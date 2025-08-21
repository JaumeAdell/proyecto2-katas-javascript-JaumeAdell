const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  const arrayunica = [];

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if(!arrayunica.includes(element)){
        arrayunica.push(element);
    }
  }
  return arrayunica;
}
console.log(removeDuplicates(duplicates));