// 1. chamar a nossa API de Digimons
// 2. Filtro/busca dos Digimons
// 3. Redenrizador de objetos/imagens/informações
// 4. Main


// 1. chamar a API
async function getDigimonsAPI() {
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");

    return await response.json()

}
// 2. Filtros

async function filtroDigimons(digimonList, digimonId) {
    const digimon = await digimonList.find((monster) => monster.id === digimonId);

    return digimon


}

// 3. Renderizador
async function renderDigimons(digimon){
    const imgDigimonElement = document.getElementById
    ("img__digimon")
    imgDigimonElement.src = digimon.image;

    const txtDigimonElement = document.getElementById
    ("t-nome__Digimon")
    txtDigimonElement.textContent = digimon.name;

    const hpDigimonElement = document.getElementById("hp__int");
    const atkDigimonElement = document.getElementById("atk__int");
    const defDigimonElement = document.getElementById("def__int");

    hpDigimonElement.style.width = digimon.HP + '%'
    atkDigimonElement.style.width = digimon.ATK + '%'
    defDigimonElement.style.width = digimon.DEF + '%'

}


// 4. Main
async function main() {
    const digimons = await getDigimonsAPI();

    const chooseDigimons = await filtroDigimons(digimons,9);

    await renderDigimons(chooseDigimons);

}
main();