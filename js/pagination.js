

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
            articleTitle: "a/Babies Safety Products",
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


