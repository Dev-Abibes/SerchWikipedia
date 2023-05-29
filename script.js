const form = document.querySelector(".js-search-form");
const searchEl = document.querySelector(".js-search-input");
const resultSearch = document.querySelector(".js-search-results");
const spinner = document.querySelector(".js-spinner")
const url = "https://en.wikipedia.org/?curid=${resultante.pageid}";
const endpoint = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}";

form.addEventListener('submit', handleSubmit);
async function handleSubmit(e){
    e.preventDefault();
    const input = searchEl.value;
    const a = await getWikipedia(input);
    spinner.innerHTML = "";
    if(!getWikipedia(input)){
        alert("rentre chez ta mere")
    }
    displaySearch(a);
}

async function getWikipedia(searchQuery){
    const response = await fetch(endpoint);
    if(response.ok){
    }
    return json = response.json();
}

function displaySearch(results){
    results.query.search.forEach(resultante => {
        resultSearch.insertAdjacentHTML(
            'beforeend',
            `<div class="result-item">
      <h3 class="result-title">
        <a href="${url}" target="_blank" rel="noopener">${resultante.title}</a>
      </h3>
      <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
      <span class="result-snippet">${resultante.snippet}</span><br>
    </div>`
        );
    });
    console.log(results);

}
