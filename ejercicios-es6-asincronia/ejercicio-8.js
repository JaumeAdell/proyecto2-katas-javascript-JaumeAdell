const select = document.getElementById("character-list");
const img = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then(response => response.json())
  .then(characters => {
    
    characters.forEach(character => {
      const option = document.createElement("option");
      option.value = character.id;             
      option.textContent = character.fullName;
      select.appendChild(option);
    });


    select.addEventListener("change", () => {
      const characterId = select.value;


      const selectedCharacter = characters.find(char => char.id == characterId);


      img.src = selectedCharacter.imageUrl;
      img.alt = selectedCharacter.fullName;
    });
  })
  .catch(error => console.error("Error cargando personajes:", error));