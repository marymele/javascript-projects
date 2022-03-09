let apiQuotes=[];

const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twittweBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');


//Show Loader
function loading() {
    loader.hidden=false;
    quoteContainer.hidden=true;
}

//Hide Loader
function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true;
    
}

//Show New Quote
// function newQuote(){
//     //Pick a random quote from apiQuotes array
//     const data=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     //console.log(quote.text);
//     //console.log(quote.author);
//     var quote=JSON.parse(data)
//     return quote;
// }
// Get Quotes From API
async function getQuotes(){
    loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes=await response.json();
        const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
        
        // If Author is blank, add 'Unknown'
        if(quote.author===''){
            authorText.innerText= "Unknown";
        }else{
            authorText.innerText=quote.author;
        }
        //Reduce font size for long quotes
        if(quote.text.length>100){
            quoteText.classList.add('long-quote')
        }else{
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText=quote.text;
        complete();

    } catch(error){
        //Catch Error Here
    }
}
//Tweet Quote
function tweetQuote() {
    const quote= quoteText.innerText;
    const author= authorText.innerText;
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quote} - ${author}`;

    window.open(twitterUrl, '_blank');
}
//Event Listeners
newQuoteBtn.addEventListener('click', getQuotes);
twittweBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
//loading();
 