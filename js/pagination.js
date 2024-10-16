

//THERE MUST BE MORE ELEMENTS IN articlesDataBase THAN CONTAINERS IN HTML PAGES OR ARTICLES AND CONTAINERS MUST HAVE THE SAME LENGTH:)

//PAGINATION: 1) create a/article.html (copy an article and change everything), 2) feed articlesDataBase with the entry, 3) follow the images' order on index.html


/**SCHEDULED POST HERE
 * 
 *     {
        articleTitle: "How To Write Exciting Characters Without Neglecting Your Mental Health",
        articleDescription: "I explain how to apply psychology, narrative art, and sociology to make up characters that do their job (entertain and get money for you).",
        articleHref: "/a/how-to-write-characters-that-keep-readers-excited.html"
    } 
 * 
 */
    const articlesDataBase = [
        {
            articleTitle: "¿Cómo manejar tu marca durante una crisis social?",
            articleDescription: "piénsenlo dos veces antes de recortar el presupuesto de investigación de mercados y publicidad durante los tiempos de crisis",
            articleHref: "/a/como-manejo-mi-marca-durante-una-crisis-social.html"
        },
        {
            articleTitle: "Babies Safety Products",
            articleDescription: "How to sell to a generation of parents concerned about safety and success? In this study we analyze possible gaps in baby brands",
            articleHref: "/a/babies-safety-products.html"
        },
        {
            articleTitle: "B2B: sala de lactacia y productividad",
            articleDescription: "¿Son compatibles maternidad, lactancia y éxito laboral?",
            articleHref: "/a/b2b-sala-de-lactacia-y-productividad.html"
        },           
        {
            articleTitle: "La máquina de insights de Airbnb",
            articleDescription: "Airbnb tiene una fortuna en datos. Vienen de los 200 millones de personas que han reservado viajes",
            articleHref: "/a/arbnb-y-sus-estrategias-para-obtener-insights.html"
        },  
        {
            articleTitle: "Are Science Fiction and Fantasy Different?",
            articleDescription: "Why is science fiction so hard to define? It tends to pay more attention to the harmful sides of civilization. The future is the safest laboratory to try out fiction ideas.",
            articleHref: "/a/are-science-fiction-fantasy-different.html"
        },
        {
            articleTitle: "Think Like A Dinosaur is a Happy Exception in High Concept Science Fiction",
            articleDescription: "I explain you how Science Fiction and Fantasy are similar and Different, so you can decide which novel you'll write.",
            articleHref: "/a/think-like-a-dinosaur-james-Patrick-kelly-scifi.html"
        },
        {
            articleTitle: "The Origins Of Matrix, Chrome, And A Bunch Of Hackers Fighting For Money And Love",
            articleDescription: "I tell the origins of the concept of Matrix and comment on a SciFi classic.",
            articleHref: "/a/origins-of-matrix-william-gibson-burning-chrome.html"
        },
        {
            articleTitle: "Best Viewpoints For Fiction And How To Build Them",
            articleDescription: "I talk about what viewpoint is, how to use it in writing, and how to shifting viewpoints",
            articleHref: "/a/best-viewpoints-for-fiction-and-how-to-build-them.html"
        },
        {
            articleTitle: "Dialogue And Pace For Happy Audiences",
            articleDescription: "Learn how scenes are combinations of Dramatic action (units of action and reaction) and Dialogue. Also: pointless conversation destroys a novel; and  the aftermath of good dialogue is conflict.",
            articleHref: "/a/dialogue-and-pace-for-happy-audiences.html"
        },
        {
            articleTitle: "Make The Reader Want To Know What Happens Next",
            articleDescription: "Saavy writers know that the scenes are a line of domino pieces. But how do you align them correctly? ",
            articleHref: "/a/how-to-create-a-page-turner-novel.html"
        },
        {
            articleTitle: "Setting A Good Story And A Strong Bond Between The Reader And The Hero",
            articleDescription: "I explain you how to write a novel that provides an emotional elaboration and a rich plot.",
            articleHref: "/a/how-to-make-a-page-turner-reader-and-hero.html"
        },
        {
            articleTitle: "How To Write A Good Scene",
            articleDescription: "I tell you how to use conflict in scenes, which are the types of scenes, and how to set The Big Scene",
            articleHref: "/a/how-to-write-a-good-scene.html"
        },
        {
            articleTitle: "An Empty Text 1",
            articleDescription: "This is a unique form of invisible fiction 1",
            articleHref: "/us-infographics-404.html"
        },
        {
            articleTitle: "An Empty Text 2",
            articleDescription: "This is a unique form of invisible fiction 2",
            articleHref: "/us-infographics-404.html"
        },
        {
            articleTitle: "An Empty Text 3",
            articleDescription: "This is a unique form of invisible fiction 3",
            articleHref: "/index.html"
        }
           
    ];
    console.log(articlesDataBase.length);


//--TITLES---TITLES---TITLES---TITLES---TITLES---TITLES---TITLES---TITLES--

//Page 1
let titlePageOne = document.getElementsByName("titlePage1");
for(let i = 0; i < titlePageOne.length; i++){
    
    titlePageOne[i].innerHTML = articlesDataBase[i].articleTitle;
};

//Page 2

let titlePage2 = document.getElementsByName("titlePage2");
let counter2 = 8;
for (let n = 0; n < titlePage2.length; n++) {
    
    titlePage2[n].innerHTML = articlesDataBase[counter2].articleTitle;
    counter2 = counter2 +1;
}

//--HREF--HREF--HREF--HREF--HREF--HREF--HREF--HREF--HREF--HREF--HREF--HREF

//Page 1
let hrefPageOne = document.getElementsByName("hrefPage1");
for(let j = 0; j < hrefPageOne.length; j++){
    hrefPageOne[j].href = articlesDataBase[j].articleHref;
}
//Page 2
let hrefPageTwo = document.getElementsByName("hrefPage2");
let counter1 = 8;
for(let j = 0; j < hrefPageTwo.length; j++){
    hrefPageTwo[j].href = articlesDataBase[counter1].articleHref;
    counter1 = counter1 + 1;
}

//--SYNOPSIS--SYNOPSIS--SYNOPSIS--SYNOPSIS--SYNOPSIS--SYNOPSIS--SYNOPSIS--SYNOPSIS

//Page 1
let summaryPageOne = document.getElementsByName("summaryPage1");
let abstract = 4;
for (let l = 0; l < summaryPageOne.length; l++) {
    summaryPageOne[l].innerHTML = articlesDataBase[abstract].articleDescription;
    abstract = abstract + 1;
}
//Page 2
let summaryPage2 = document.getElementsByName('summaryPage2');
let abstractCounter = 8;
for (let i = 0; i< summaryPage2.length; i++) {
  summaryPage2[i].innerHTML = articlesDataBase[abstractCounter].articleDescription;
  abstractCounter = abstractCounter + 1;
    }



//drafts
/**
 let myArrInBrowser = [0,1,2,3,4,5,6,7,8,9,10];

let counterForDB = 8;
for (let g = 0; g < myArrInBrowser.length; g++) {
    
    if (counterForDB > myArrInBrowser.length-1) {
        return;
    } else {
    let tester = articlesDataBase[counterForDB].articleTitle;
    console.log(articlesDataBase[counterForDB].articleTitle);
    counterForDB = counterForDB + 1;
    }    
}

let titlePageTwoArr = document.getElementsByName("titlePage2");
let counterForDBp2Titles = 8;

for (let g = 0; g < titlePageTwoArr.length; g++) {
    if (counterForDBp2Titles > titlePageTwoArr.length - 1) {
        return;
    } else {
        titlePageTwoArr[g].innerHTML = articlesDataBase[counterForDBp2Titles].articleTitle;
    }    
}
 */

/**
 * // SYNOPSIS
 * 
 * //Page 2
let summaryPageTwo = document.getElementsByName("summaryPage2");
let myLopperInDataBase = 8;
for (let page2summaryLooper = 0; page2summaryLooper < summaryPageTwo.length; page2summaryLooper++) {
    summaryPageTwo[page2summaryLooper].innerHTML = articlesDataBase[myLopperInDataBase].articleDescription;
    myLopperInDataBase = myLopperInDataBase + 1;
}
 * 
 * 
 * //Article 0
document.getElementById('title0').innerHTML = articlesDataBase[0].articleTitle;
document.getElementById('href0').href = articlesDataBase[0].articleHref;

//Article 1
document.getElementById('title1').innerHTML = articlesDataBase[1].articleTitle;
document.getElementById('href1').href = articlesDataBase[1].articleHref;

//Article 2
document.getElementById('title2').innerHTML = articlesDataBase[1].articleTitle;
document.getElementById('href2').href = articlesDataBase[1].articleHref;
 * 
 */


