let ctext = document.querySelector('.card-text')
let content = document.querySelector('.content')
let author = document.querySelector('.author')
function randomQuote(){
    fetch("https://free-quotes-api.herokuapp.com/").then(response => response.json()).then(result => {
        ctext.innerText = result.quote
        author.innerHTML = "Author: "+result.author || "No Author"
        content.style.display = "block"
    });
}
//Everything is finished and you can improve the design and add more functionalities I guess. 
// Always remeber in coding sky is the limit 