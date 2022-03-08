let apiQuotes=[];

const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twittweBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');

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
        
        quoteText.innerText=quote.text;


    } catch(error){
        //Catch Error Here
    }
}



// On Load
getQuotes();
 