const clpalaciosQuoteMachine = function  (){
    
    const quotes = [
        

        {
            quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
            author: "Albus Dumbledore"
        },
        {
            quote: "There are some things you can’t share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.",
            author: "Harry Potter"
        },
        {
            quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
            author: "A. Dumbledore, Harry Potter"
        },
        {
            quote: "Books! And cleverness! There are more important things — friendship and bravery.",
            author: "Hermione, Harry Potter"
        },
        
        {
            quote: "I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.'",
            author: "Rubeus Hagrid"
        },
        {
            quote: "Time will not slow down when something unpleasant lies ahead.",
            author: "Harry Potter "
        },
        {
            quote: "It does not do to dwell on dreams and forget to live.",
            author: "Albus Dumbledore"
        },
        {
            quote: "No good sittin’ worryin’ abou’ it. What’s comin’ will come, an’ we’ll meet it when it does.",
            author: "Rubeus Hagrid"
        },
        {
            quote: "It matters not what someone is born, but what they grow to be.",
            author: "Albus Dumbledore"
        },
        {
            quote: "To the well-organized mind, death is but the next great adventure",
            author: "Albus Dumbledore"
        },
        {
            quote: "Yeah, size is no guarantee of power",
            author: "George Weasley"
        },
        {
            quote: "There’s things more importan’ than keepin’ a job.",
            author: "Rubeus Hagrid"
        },
        {
            quote: "Have you any idea how much tyrants fear the people they oppress? All of them realize that, one day, amongst their many victims, there is sure to be one who rises against them and strikes back!",
            author: "Dumbledore"
        },
        {
            quote: "It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it.",
            author: "Albus Dumbledore"
        },
        {
            quote: "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.",
            author: "Albus Dumbledore"
        },
        {
            quote: "Age is foolish and forgetful when it underestimates youth.",
            author: "Albus Dumbledore,"
        },
        {
            quote: "We are only as strong as we are united, as weak as we are divided.",
            author: "A. Dumbledore, Harry Potter"
        },
        {
            quote: "It is impossible to manufacture or imitate love",
            author: "Horace Slughorn"
        },
        {
            quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
            author: "Luna Lovegood"
        },
        {
            quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
            author: "Sirius Black"
        },
        {
            quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
            author: "Arthur Weasley"
        },
        {
            quote: "Every human life is worth the same, and worth saving.",
            author: "Kingsley Shacklebolt"
        },
        {
            quote: "Have a biscuit, Potter.",
            author: "Minerva McGonagall"
        },
        {
            quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
            author: "Albus Dumbledore"
        },
        {
            quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
            author: "Dobby"
        },
    ];
    let arrayLength = quotes.length;
    let randomNumberInArray = Math.round(Math.random() * arrayLength);
    let quoteAuthor = quotes[randomNumberInArray].author;

    return `"${quotes[randomNumberInArray].quote}" <strong itemprop="author" ><em><i style="font-size: 1rem; color: rgb(175, 174, 174);" ">${quoteAuthor}</i></em></strong>`;
}

let slot1 = clpalaciosQuoteMachine();


document.getElementById('quoteIntoHtml').innerHTML = slot1;

document.getElementById ('shareTweet').href = "https://twitter.com/intent/tweet?text=" + slot1.replace('<strong itemprop="author" ><em><i style="font-size: 1rem; color: rgb(175, 174, 174);" ">','--').replace('</i></em></strong>','--') + " @clpalacios_in";
document.getElementById('newQuote').addEventListener('click', clpalaciosQuoteMachine()+" #quote @clpalacios_in");
