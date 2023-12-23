var quote = document.getElementById("quotes");
var author1 = document.getElementById("author");

async function genquote(){
    const responce = await fetch("https://api.quotable.io/quotes/random");
    var data = await responce.json();
    quote.innerHTML = data[0].content ;
    author1.innerHTML = "- By " + data[0].author;

}

window.onload = genquote();

function gentweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML +author1.innerHTML , "Tweet Window","Width=600 , height=300");
}