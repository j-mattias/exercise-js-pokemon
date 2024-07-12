setupPagination();

function setupPagination() {
    const pokedexRef = document.querySelector('#pokedexSection');
    const searchRef = document.querySelector('#searchSection');
    const generateRef = document.querySelector('#generateSection');
    pokedexRef.classList.add('d-none');
    searchRef.classList.add('d-none');
    generateRef.classList.add('d-none');
    const navRefs = document.querySelectorAll('.header_nav-item');
    navRefs.forEach(navRef => {
        navRef.addEventListener('click', (e) => {
            if(e.target.textContent === 'Pokedex') {
                pokedexRef.classList.remove('d-none');
                searchRef.classList.add('d-none');
                generateRef.classList.add('d-none');

                setupPokemonGrid();
            } else if(e.target.textContent === 'Search') {
                pokedexRef.classList.add('d-none');
                searchRef.classList.remove('d-none');
                generateRef.classList.add('d-none');
            } else if(e.target.textContent === 'Generate') {
                pokedexRef.classList.add('d-none');
                searchRef.classList.add('d-none');
                generateRef.classList.remove('d-none');
            }
        });
    });
}

function setupPokemonGrid() {
    console.log('setupPokemoGrid');
    const pokedexGridRef = document.querySelector('#pokedexGrid');

    pokemons.forEach(pokemon => {
        let cardRef = createPokemonCard(pokemon);
        pokedexGridRef.appendChild(cardRef);
    });

}

console.log(pokemons[0]);

function createPokemonCard(pokemon) {
    const cardRef = document.createElement('article');
    cardRef.classList.add('card');

    // const indexRef = document.createElement('span');
    // indexRef.classList.add('card_index');
    // indexRef.textContent = `#${pokemon.id}`;
    // cardRef.appendChild(indexRef);

    // const backgroundRef = document.createElement('figure');
    // backgroundRef.classList.add('card_background');
    // backgroundRef.style.backgroundColor = pokemon.type[0].color;
    // cardRef.appendChild(backgroundRef);

    // const imageRef = document.createElement('img');
    // imageRef.classList.add('card_image');
    // imageRef.src = pokemon.image;
    // imageRef.alt = `Image of the pokemon called ${pokemon.name}`;
    // backgroundRef.appendChild(imageRef);

    // let divRef = document.createElement('div');
    // divRef.classList.add('card_text');
    // cardRef.appendChild(divRef);

    // const nameRef = document.createElement('h2');
    // nameRef.classList.add('card-name');
    // nameRef.textContent = pokemon.name;
    // divRef.appendChild(nameRef);

    // const typeRef = document.createElement('p');
    // typeRef.classList.add('card-type');
    // if(pokemon.type.length > 1) {
    //     typeRef.textContent = `${pokemon.type[0].name} / ${pokemon.type[1].name}`;
    // } else {
    //     typeRef.textContent = `${pokemon.type[0].name}`;
    // }
    // divRef.appendChild(typeRef);

    // divRef = document.createElement('div');
    // divRef.classList.add('card_stats');
    // cardRef.appendChild(divRef);

    // let statRef = document.createElement('p');
    // statRef.classList.add('card_stat');
    // statRef.textContent = `Attack: ${pokemon.stats.attack}`;
    // divRef.appendChild(statRef);

    // statRef = document.createElement('p');
    // statRef.classList.add('card_stat');
    // statRef.textContent = `Defense: ${pokemon.stats.defense}`;
    // divRef.appendChild(statRef);

    // statRef = document.createElement('p');
    // statRef.classList.add('card_stat');
    // statRef.textContent = `Sp. Attack: ${pokemon.stats.specialAttack}`;
    // divRef.appendChild(statRef);

    // statRef = document.createElement('p');
    // statRef.classList.add('card_stat');
    // statRef.textContent = `Sp. Defense: ${pokemon.stats.specialDefense}`;
    // divRef.appendChild(statRef);

    // statRef = document.createElement('p');
    // statRef.classList.add('card_stat');
    // statRef.textContent = `Speed: ${pokemon.stats.speed}`;
    // divRef.appendChild(statRef);

    // statRef = document.createElement('p');
    // statRef.classList.add('card_stat');
    // statRef.textContent = `HP: ${pokemon.stats.hp}`;
    // divRef.appendChild(statRef);

    // statRef = document.createElement('p');
    // statRef.classList.add('card_stat');
    // statRef.textContent = `Total: ${pokemon.stats.total}`;
    // divRef.appendChild(statRef);

    let typeString;
    if(pokemon.type.length > 1) {
        typeString = `${pokemon.type[0].name} / ${pokemon.type[1].name}`;
    } else {
        typeString = pokemon.type[0].name;
    }

    const cardTemplate = `
            <span class="card_index">#${pokemon.id}</span>
            <figure class="card_background">
                <img src="${pokemon.image}" alt="Image of the pokemon called ${pokemon.name}" class="card_image">
            </figure>
            <div class="card_text">
                <h2 class="card-name">${pokemon.name}</h2>
                <p class="card-type">${typeString}</p>
            </div>
            <div class="card_stats">
                <p class="card_stat">Attack: ${pokemon.stats.attack}</p>
                <p class="card_stat">Defense: 50</p>
                <p class="card_stat">Sp. Attack: 50</p>
                <p class="card_stat">Sp. Defense: 50</p>
                <p class="card_stat">Speed: 50</p>
                <p class="card_stat">HP: 50</p>
                <p class="card_stat">Total: 300</p>
            </div>
    `;

    cardRef.innerHTML = cardTemplate;

    return cardRef;
}

{/* <article class="card">
    <span class="card_index">#1</span>
    <figure class="card_background">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" class="card_image">
    </figure>
    <div class="card_text">
        <h2 class="card-name">Bulbasaur</h2>
        <p class="card-type">Grass / Poison</p>
    </div>
    <div class="card_stats">
        <p class="card_stat">Attack: 50</p>
        <p class="card_stat">Defense: 50</p>
        <p class="card_stat">Sp. Attack: 50</p>
        <p class="card_stat">Sp. Defense: 50</p>
        <p class="card_stat">Speed: 50</p>
        <p class="card_stat">HP: 50</p>
        <p class="card_stat">Total: 300</p>
    </div>
</article> */}





