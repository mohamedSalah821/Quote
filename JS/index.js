var quoten = document.getElementById('quote');
var authorm = document.getElementById('quoteAuthor');

var groupOfQuotes = [
    { 'quote': '“Be yourself; everyone else is already taken.”', 
    'author': '--Oscar Wilde' },
    { 'quote': '“If you tell the truth, you don’t have to remember anything.”',
    'author':  '--Mark Twain' },
    { 'quote': '“So many books, so little time.”', 'author': 
    '--Frank Zappa' },
    { 'quote': '“A room without books is like a body without a soul.”', 
    'author': '--Marcus Tullius Cicero' },
    { 'quote': '“You only live once, but if you do it right, once is enough.”',
    'author': '--Mae West' },
    { 'quote': '“Be the change that you wish to see in the world.”', 
    'author': '--Mahatma Gandhi' }
];

var lastQuoteIndex = -1;

function dispalyQuote() {
    var randomQuote;
    do {
        randomQuote = Math.floor(Math.random() * groupOfQuotes.length);
    } while (randomQuote === lastQuoteIndex);

    lastQuoteIndex = randomQuote;

    var quote = groupOfQuotes[randomQuote].quote;
    var author = groupOfQuotes[randomQuote].author;

    quoten.innerHTML = quote;
    authorm.innerHTML = author;
}
