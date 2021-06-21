const quotes = [
    {
        quote: "If you want to live a happy life, tie ti to a goal, not the people or things.",
        author: "Albert Einstein",
    },
    {
        quote: "Let me tell you the secret that has led me to my goal. My strength lies solely in my tenacity",
        author: "Louis Pasteur",
    },
    {
        quote: "A journey of a thousand miles must begin with a single step.",
        author: "Lao Tzu",
    },
    {
        quote: "The time won't wait you until you run next to them.",
        author: "Unknown tomato",
    },
    {
        quote: "Better three hours too soon than a minute too late.",
        author: "William Shakespeare",
    },
    {
        quote: "You can't change the volume of your time, but you can change the density.",
        author: "Unknown tomato",
    },
    {
        quote: "The key is in not spending time, but in investing it.",
        author: "Stephen R. Covey",
    },
    {
        quote: "Punctuality is the thief of time.",
        author: "Oscar Wilde",
    },
    {
        quote: "You can’t make up for lost time. You can only do better in the future.",
        author: "Ashley Ormon",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");



function ramdomQuote(){
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.quote;

}