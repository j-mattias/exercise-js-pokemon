setupPagination();

function setupPagination() {
    const pokedexRef = document.querySelector("#pokedexSection");
    const searchRef = document.querySelector("#searchSection");
    const generateRef = document.querySelector("#generateSection");
    pokedexRef.classList.add("d-none");
    searchRef.classList.add("d-none");
    generateRef.classList.add("d-none");
    const navRefs = document.querySelectorAll(".header_nav-item");
    navRefs.forEach((navRef) => {
        navRef.addEventListener("click", (e) => {
            if (e.target.textContent === "Pokedex") {
                pokedexRef.classList.remove("d-none");
                searchRef.classList.add("d-none");
                generateRef.classList.add("d-none");

                setupPokemonGrid();
            } else if (e.target.textContent === "Search") {
                pokedexRef.classList.add("d-none");
                searchRef.classList.remove("d-none");
                generateRef.classList.add("d-none");

                setupSearchForm();
            } else if (e.target.textContent === "Generate") {
                pokedexRef.classList.add("d-none");
                searchRef.classList.add("d-none");
                generateRef.classList.remove("d-none");

                setupGenerateForm();
            }
        });
    });
}

function setupPokemonGrid() {
    console.log("setupPokemonGrid");
    const pokedexGridRef = document.querySelector("#pokedexGrid");
    clearResults(pokedexGridRef);

    pokemons.forEach((pokemon) => {
        let cardRef = createPokemonCard(pokemon);
        pokedexGridRef.appendChild(cardRef);
    });
}

function createPokemonCard(pokemon) {
    const cardRef = document.createElement("article");
    cardRef.classList.add("card");

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
    if (pokemon.type.length > 1) {
        typeString = `${pokemon.type[0].name} / ${pokemon.type[1].name}`;
    } else {
        typeString = pokemon.type[0].name;
    }

    const cardTemplate = `
            <span class="card_index">#${pokemon.id}</span>
            <figure class="card_background" style="background-color:${pokemon.type[0].color};">
                <img src="${pokemon.image}" alt="Image of the pokemon called ${pokemon.name}" class="card_image">
            </figure>
            <div class="card_text">
                <h2 class="card-name">${pokemon.name}</h2>
                <p class="card-type">${typeString}</p>
            </div>
            <div class="card_stats">
                <p class="card_stat">Attack: ${pokemon.stats.attack}</p>
                <p class="card_stat">Defense: ${pokemon.stats.defense}</p>
                <p class="card_stat">Sp. Attack: ${pokemon.stats.specialAttack}</p>
                <p class="card_stat">Sp. Defense: ${pokemon.stats.specialDefense}</p>
                <p class="card_stat">Speed: ${pokemon.stats.speed}</p>
                <p class="card_stat">HP: ${pokemon.stats.hp}</p>
                <p class="card_stat">Total: ${pokemon.stats.total}</p>
            </div>
    `;

    cardRef.innerHTML = cardTemplate;

    return cardRef;
}

function setupSearchForm() {
    const searchRef = document.querySelector("#pokedex-search");
    const formRef = document.createElement("form");
    formRef.classList.add("main_search-form");
    clearResults(searchRef);

    const inputRef = document.createElement("input");
    inputRef.type = "text";
    inputRef.placeholder = "Pokemon/type name...";
    inputRef.id = "input-pokemon";
    formRef.appendChild(inputRef);

    const buttonRef = document.createElement("button");
    buttonRef.type = "submit";
    buttonRef.textContent = "Search";
    buttonRef.id = "search-submit";
    formRef.appendChild(buttonRef);

    searchRef.appendChild(formRef);
    createSearchResultContainer();
    getSearchInput();
}

function createSearchResultContainer() {
    const searchRef = document.querySelector("#pokedex-search");
    const sectionRef = document.createElement("section");
    sectionRef.classList.add("main_pokedex-grid", "search-results");

    searchRef.appendChild(sectionRef);
}

function getSearchInput() {
    const searchFormRef = document.querySelector(".main_search-form");
    searchFormRef.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputRef = document.querySelector("#input-pokemon").value.trim();
        searchPokemon(inputRef);
    });
}

function searchPokemon(pokemonSearch) {
    const mainPokedexGridRef = document.querySelector(".search-results");
    clearResults(mainPokedexGridRef);

    let isFound = false;

    // Search for pokemon name
    pokemons.forEach((pokemon) => {
        if (pokemonSearch.localeCompare(pokemon.name, "en", { sensitivity: "base" }) === 0) {
            const cardRef = createPokemonCard(pokemon);
            mainPokedexGridRef.appendChild(cardRef);
            isFound = true;
        }

        // Search for pokemon type
        pokemon.type.forEach((type) => {
            if (pokemonSearch.localeCompare(type.name, "en", { sensitivity: "base" }) === 0) {
                const cardRef = createPokemonCard(pokemon);
                mainPokedexGridRef.appendChild(cardRef);
                isFound = true;
            }
        });
    });

    if (!isFound) {
        const notFoundMessageRef = document.createElement("p");
        notFoundMessageRef.textContent = `"${pokemonSearch}" not found`;
        notFoundMessageRef.style.gridColumn = "1 / -1";
        notFoundMessageRef.style.justifySelf = "center";
        mainPokedexGridRef.appendChild(notFoundMessageRef);
    }
}

function clearResults(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}

function setupGenerateForm() {
    const pokedexGenerateRef = document.querySelector("#pokedex-generate");

    const minStat = getMinStat();

    const generateFormTemplate = `
        <form class="main_generate-form">
            <label for="type">Type:</label>
            <input type="text" name="type" placeholder="Pokemon type" id="input-type" />
            <label for="stat-total">Stat total:</label>
            <input
                type="number"
                name="stat-total"
                placeholder="Stat total"
                value="${minStat}"
                min="${minStat}"
                id="input-stat"
            />
            <button type="submit">Generate</button>
        </form>
        <section class="main_pokedex-grid generate-results"></section>
    `;

    pokedexGenerateRef.innerHTML = generateFormTemplate;
    enablePokemonGeneration();
}

function enablePokemonGeneration() {
    const generateFormRef = document.querySelector(".main_generate-form");

    generateFormRef.addEventListener("submit", (e) => {
        e.preventDefault();
        generatePokemon(collectInput());
    });
}

function generatePokemon(inputObj) {
    const mainPokedexGridRef = document.querySelector(".main_pokedex-grid.generate-results");
    const types = getPokemonTypes(pokemons);
    const { type: pokemonType, statTotal: pokemonStat } = inputObj;

    clearResults(mainPokedexGridRef);

    if (!types.has(pokemonType)) {
        const invalidTypeMessageRef = document.createElement("p");
        invalidTypeMessageRef.textContent = `${pokemonType} not found`;
        invalidTypeMessageRef.style.gridColumn = "1 / -1";
        invalidTypeMessageRef.style.justifySelf = "center";
        mainPokedexGridRef.appendChild(invalidTypeMessageRef);
    } else if (pokemonStat < getMinStat() || pokemonStat > getMaxStat()) {
        const invalidTypeMessageRef = document.createElement("p");
        invalidTypeMessageRef.textContent = `Stat ${pokemonStat} too high/low`;
        invalidTypeMessageRef.style.gridColumn = "1 / -1";
        invalidTypeMessageRef.style.justifySelf = "center";
        mainPokedexGridRef.appendChild(invalidTypeMessageRef);
    }

    pokemons.forEach((pokemon) => {
        pokemon.type.forEach((type) => {
            if (
                pokemonType === type.name.toLowerCase() &&
                (pokemonStat < pokemon.stats.total + 100 && pokemonStat > pokemon.stats.total - 100)
            ) {
                const cardRef = createPokemonCard(pokemon);
                mainPokedexGridRef.appendChild(cardRef);
            }
        });
    });
}

function collectInput() {
    const inputTypeRef = document.querySelector("#input-type");
    const inputStatRef = document.querySelector("#input-stat");

    const inputObj = {
        type: inputTypeRef.value.toLowerCase().trim(),
        statTotal: parseInt(inputStatRef.value),
    };
    return inputObj;
}

function getPokemonTypes(pokeArr) {
    const types = new Set();
    pokeArr.forEach((pokemon) => {
        pokemon.type.forEach((type) => {
            types.add(type.name.toLowerCase());
        });
    });
    return types;
}

function getMinStat() {
    let stats = [];
    pokemons.forEach((pokemon) => {
        stats.push(pokemon.stats.total);
    });

    return Math.min(...stats);
}

function getMaxStat() {
    let stats = [];
    pokemons.forEach((pokemon) => {
        stats.push(pokemon.stats.total);
    });

    return Math.max(...stats);
}