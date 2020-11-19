function endangeredSpecies(continent, species){
  let continentMatch = document.querySelector("[data-continent='" + continent + "']")

  let matches = continentMatch.querySelector("[data-species='"+ species + "']");

  return matches.innerText;
}
