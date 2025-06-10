

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
            articleTitle: "Retail Sales Analysis in CDMX",
            articleDescription: "Which store had the highest revenue last month? Uncover it with SQL.",
            articleHref: "/a/sql-retail-project-circlek-mexico.html"
        },
        {
            articleTitle: "Los supermercados son muertos vivientes",
            articleDescription: "la gente continúa acudiendo a los supermercados para contemplar, tocar, analizar, filtrar y comprar",
            articleHref: "/a/el-supermercado-es-mi-laboratorio-Herb-Sorensen.html"
        },
        {
            articleTitle: "Sharing Is (S)Caring: What Web Browsing Tell Us About The Online Consumer",
            articleDescription: "In 2018 Francois Erner and Jennifer Roberton made a very unusual experiment  ",
            articleHref: "/a/what-web-navigation-tell-us-about-consumers.html"
        },
        {
            articleTitle: "Inmersión cualitativa en el Dark Social",
            articleDescription: "Analizamos el Dark Social, una red de redes sociales que descansa en el anonimato, el open source y un consumismo inteligente.",
            articleHref: "/a/el-lado-oscuro-de-las-redes-y-la-investigacion-cualitativa.html"
        },
        {
            articleTitle: "Netnography Can Tackle Consumer Reluctance to Participate in Marketing Research",
            articleDescription: "Consumers are less and less interested in participating in market research. Netnography can help In the United States, for example...",
            articleHref: "/a/netnography.html"
        },
        {
            articleTitle: "El éxito de la publicidad disruptiva: mujeres, Nosotras y #Muéstranos",
            articleDescription: "cómo cambio la publicidad de toallas sanitarias: el cambió se basó en insights relacionados con la vergüenza y la culpa",
            articleHref: "/a/el-exito-de-la-publicidad-disruptiva-kotex-nosotras-libresse.html"
        },       
        {
            articleTitle: "Testeando una app para healthcare",
            articleDescription: "Una empresa de salud construye y testea un nuevo producto (y su app), combinando comunidades online e investigación cara a cara",
            articleHref: "/a/origins-of-matrix-william-gibson-burning-chrome.html"
        },
        {
            articleTitle: "Marketing recipes that end in small disasters",
            articleDescription: "An essay on marketing cliches and their predictable consequences in everyday life",
            articleHref: "/a/us-bad-marketing.html"
        },
        {
            articleTitle: "Online Communities, wine and freedom",
            articleDescription: "a research developed by the French brand Pernod Ricard in Latin America, focused on lifestyles",
            articleHref: "/a/french-pernod-innovating-online-communities.html"
        },
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


