setupPagination();

function setupPagination() {
    const navRefs = document.querySelectorAll('.header_nav-item');
    const pokedexRef = document.querySelector('#pokedexSection');
    const searchRef = document.querySelector('#searchSection');
    const generateRef = document.querySelector('#generateSection');
    pokedexRef.classList.add('d-none');
    searchRef.classList.add('d-none');
    generateRef.classList.add('d-none');
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

}

function createPokemonCard(pokemon) {

}



