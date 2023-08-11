async function fetchCharacters() {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character?status=alive"
    );
    const data = await response.json();
    const characters = data.results.slice(0, 50);
    const characterList = document.getElementById("characterList");
    characters.forEach((character) => {
      const listItem = document.createElement("li");
      listItem.classList.add("card");
      //this is easier than creating an element for each property  giving it a textContent then appending it :)
      listItem.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" >
                <p>Species: ${character.species}</p>
                <p>Gender: ${character.gender}</p>
                <p>Location: ${character.location.name}</p>
            `;
      characterList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error Loading ze data ", error);
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = " error occurred while Loading ze data :( ";
    document.body.appendChild(errorDiv);
  }
}
fetchCharacters();
