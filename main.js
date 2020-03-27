const generateQuoteBtn = document.getElementById('generateQuote');

generateQuoteBtn.addEventListener('click', async () => {
    const res = await fetch('https://quotes.rest/qod');
    const data = await res.json();

    const quote = data.contents.quotes[0];

    const quoteEl = document.getElementById('quote');
    const authorEl = document.getElementById('author');
    const quoteContainer = document.querySelector('.quote-container');

    quoteEl.cite = quote.permalink;
    quoteEl.innerHTML = quote.quote;
    authorEl.innerHTML = `- ${quote.author}`;
    quoteContainer.style.opacity = 0.8;
});
