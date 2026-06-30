

//THERE MUST BE MORE ELEMENTS IN articlesDataBase THAN CONTAINERS IN HTML PAGES  AND CONTAINERS MUST HAVE THE SAME LENGTH:)

//PAGINATION: 1) create a/article.html (copy an article and change everything), 2) feed articlesDataBase with the entry, 3) follow the images' order on index.html


    const articlesDataBase = [ 
        {
          articleTitle: "Your Cloud Bill Has A Job Limit. Here Is The Math",
            articleDescription: "Cloud and data platforms rarely charge one flat rate. A setup fee, a premium first run, and a lower rate for every run after it pull a single budget in three directions at once, and the number of runs a team can afford falls out of that mix. This problem shows how a fixed fee, a tiered rate, and floor division combine into a capacity question, and how Python turns that logic into a tool the team reuses every session",  
            articleHref: "/a/your-cloud-bill-has-a-job-limit-here-is-the-math.html"  
        },
        {
            articleTitle: "Two Mixed Pallets Reveal The Weight Of Every Single Box",
            articleDescription: "This problem shows how two mixed measurements can pin down two unknown values exactly, and how a short Python routine turns that logic into a tool you can reuse for any pair of items",
            articleHref: "/a/two-mixed-pallets-reveal-the-weight-of-every-single-box.html"
        },
        {
            articleTitle: "The Unit Conversion That Decides Which Panel Coatings Fit A Budget",
            articleDescription: "This problem shows how a single unit conversion turns a known quantity into a per unit rate, and how Python preserves that step as a reusable tool",
            articleHref: "/a/the-unit-conversion-that-decides-which-panel-coatings-fit-a-budget.html"
        },
        {
            articleTitle: "The Cascading Arithmetic Behind A Per Seat Cloud Budget",
            articleDescription: "This problem shows how a short chain of arithmetic turns a lump total into a per unit rate, and how Python preserves that step as a reusable tool",
            articleHref: "/a/the-cascading-arithmetic-behind-a-per-seat-cloud-budget.html"  
        },
        {
            articleTitle: "When Three Feet Become Nine: The Flooring Cost Everyone Miscalculates",
            articleDescription: "This problem shows how a single multiplication turns a known length into a total area, and how Python preserves that step as a reusable tool",
            articleHref: "/a/when-three-feet-become-nine-the-flooring-cost-everyone-miscalculates.html"
        },
        {
            articleTitle: "How A Single Zone Perimeter Reveals The Whole Square Floor Area",
            articleDescription: " A team often knows the size of one zone before it knows the size of the whole floor, so it must work backward from a boundary measurement to the area it controls. This problem shows how the fixed shape of a square turns one perimeter figure into a full area, and how a short Python script makes that step reusable for any room",
            articleHref: "/a/how-a-single-zone-perimeter-reveals-the-whole-square-floor-area.html"
        },
        {
            articleTitle: "12 Warehouse Slots, One Fraction Chain, Zero Guesswork",
            articleDescription: "One sub-group, one category, one verified number",
            articleHref: "/a/12-warehouse-slots-one-fraction-chain-zero-guesswork.html"
        },
        {
            articleTitle: "The Arithmetic That Turns Three Route Segments Into Twenty Eight Stations",
            articleDescription: "Route and coverage planning rarely starts with one clean measurement. Operations teams combine segments recorded in different ways, then turn the total into a count of equipment or staff placed at a fixed interval. This problem shows how adding unlike fractions and dividing by a rate models a real placement decision, and how Python turns that logic into a reusable tool",
            articleHref: "/a/the-arithmetic-that-turns-three-route-segments-into-twenty-eight-stations.html"
        },
        {
            articleTitle: "Multiply A Packing Time By One And A Half For The Next Order",
            articleDescription: "Operations teams rarely plan a job from nothing. They size a new run against one they already measured, scaling that known time to fit a larger or repeat task, which sets the schedule and the staffing window before any work starts. This problem shows how multiplying a known duration by a simple factor turns one measured time into a planning number, and how Python can hold that logic as a reusable tool",
            articleHref: "/a/multiply-a-packing-time-by-one-and-a-half-for-the-next-order.html"
        },
        {
            articleTitle: "60 Hours, 24 Attendees, And One Division Rule That Settles It",
            articleDescription: "This problem shows how a single division turns a lump total into a per unit rate, and how Python preserves that step as a reusable tool",
            articleHref: "/a/60-hours-24-attendees-and-one-division-rule-that-settles-it.html"
        },
        {
            articleTitle: "The Credits Hiding Inside Every Leftover Budget Fraction",
            articleDescription: "This problem shows how a single division turns a lump total into a per unit rate, and how Python preserves that step as a reusable tool",
            articleHref: "/a/the-credits-hiding-inside-every-leftover-budget-fraction.html"
        },
        {
            articleTitle: "95 Licenses, One Ratio Rule, One Clean Profit Figure",
            articleDescription: "This problem shows how a single division turns a lump total into a per unit rate, and how Python preserves that step as a reusable tool",
            articleHref: "/a/95-licenses-one-ratio-rule-one-clean-profit-figure.html"
        },
        {
            articleTitle: "The Fraction Hiding In A Half Cleared Backlog",
            articleDescription: "This problem shows how a single division turns a lump total into a per unit rate, and how Python preserves that step as a reusable tool",
            articleHref: "/a/the-fraction-hiding-in-a-half-cleared-backlog.html"
        },
        {
            articleTitle: "Cloud Billing Math And The Unit Rate Hiding In One Invoice",
            articleDescription: "Cloud bills arrive as one total for a whole tier, yet decisions get made one unit at a time. Finance teams need the cost of a single block to compare tiers, set chargeback rates, and spot waste. This problem shows how a single division turns a lump total into a per unit rate, and how Python preserves that step as a reusable tool",
            articleHref: "/a/cloud-billing-math-and-the-unit-rate-hiding-in-one-invoice.html"
        },
        {
            articleTitle: "The Number Hiding Inside A Data Center Power Bill",
            articleDescription: "Before a team can budget, forecast, or size cooling, it must turn one figure into a rate per machine per period",
            articleHref: "/a/the-number-hiding-inside-a-data-center-power-bill.html"
        },
        {
            articleTitle: "The Leftover Share Every Budget Decides Before You Do",
            articleDescription: "Budget lines are not all chosen",
            articleHref: "/a/the-leftover-share-every-budget-decides-before-you-do.html"
        },
        {
          articleTitle: "The Missing Dimension In Every Warehouse Floor Decision",
          articleDescription: "Space decisions hinge on numbers that a listing often omits. A team weighing one floor against another must recover the measurement that was not handed, because area and fencing drive both storage capacity and cost. This problem shows how area, a square root, and a perimeter ratio each return a missing dimension, and how Python turns that work into a reusable tool",
          articleHref: "/a/the-missing-dimension-in-every-warehouse-floor-decision.html"  
        },
        {
            articleTitle: "The Distributive Trick Behind A Three Week Energy Total",
            articleDescription: "The harder part is doing the arithmetic fast and without slips, which is where one small algebraic habit earns its keep",
            articleHref: "/a/the-distributive-trick-behind-a-three-week-energy-total.html"

        },
        {
            articleTitle: "Find The Whole From A Part, From Budgets To Bread",
            articleDescription: "Many business figures are known only in part",
            articleHref: "/a/find-the-whole-from-a-part-from-budgets-to-bread.html"
        },
        {
            articleTitle: "Multiply First, Then Split The Marketing Budget Across Every Office",
            articleDescription: "Marketing budgets are rarely built one line at a time. Teams often set one channel as a fixed multiple of another, then push the combined pool out to regions that each carry an equal share.",
            articleHref: "/a/multiply-first-then-split-the-marketing-budget-across-every-office.html"
        },
        {
            articleTitle: "42-credits-per-team-after-one-share-returns",
            articleDescription: "This problem shows how two rounds of even splitting plus a final addition can model a real reallocation",
            articleHref: "/a/42-credits-per-team-after-one-share-returns.html"
        },
        {
        articleTitle: "The Cascading Arithmetic Of Subtracting Across A Row Of Zeros",
        articleDescription: "Subtraction feels finished the moment someone can stack digits and carry a borrow, yet the operation still hides a trap that only certain numbers spring. When a balance is round and the amount taken from it is not, a single borrow can be forced to travel through a long stretch of empty columns, and the strain has nothing to do with how large the figures are. This article follows one such subtraction from the column algorithm into the mental shortcuts that step around it, and ends with two Python programs that turn the method into a tool you can reuse",
        articleHref: "/a/the-cascading-arithmetic-of-subtracting-across-a-row-of-zeros.html"
        },
        {
        articleTitle: "One Leftover Number, Two Answers, And The Question Nobody Asked",
        articleDescription: "Operational dashboards rarely fail because the arithmetic is wrong. They fail because a single figure can carry two meanings at once",
        articleHref: "/a/one-leftover-number-two-answers-and-the-question-nobody-asked.html"
        },
        {
        articleTitle: "The Three Step Calculation Behind An Even Weekly Shipping Split",
        articleDescription: "Weekly shipping commitments rarely break down into equal daily loads. This problem shows how a short chain of decimal subtraction and equal division turns a fixed weekly target into a clear daily plan, and how a small Python script can repeat that logic for any week",
        articleHref: "/a/the-three-step-calculation-behind-an-even-weekly-shipping-split.html"
        },
        {
        articleTitle: "The Number Hiding Inside Every Exported Data Bundle",
        articleDescription: "Data teams rarely see the size of a single table on its own",
        articleHref: "/a/the-number-hiding-inside-every-exported-data-bundle.html"
        },
        {
        articleTitle: "Why 5.6666 Never Belongs On A Consultant Timesheet",
        articleDescription: "Resource allocation rarely lands on a clean integer",
        articleHref: "/a/why-certain-numbers-never-belong-on-a-consultant-timesheet.html"
        },
        {
        articleTitle: "The Inverse Operation That Recovers What The Narrative Buries",
        articleDescription: "When companies audit historical contracts",
        articleHref: "/a/the-inverse-operation-that-recovers-what-the-narrative-buries.html"
        },
        {
        articleTitle: "18 Samples, One Fraction, Fifteen That Stay Home",
        articleDescription: "Allocation decisions in distribution rarely land on clean whole numbers the first time",
        articleHref: "/a/18-samples-one-fraction-fifteen-that-stay-home.html"
        },
        {
        articleTitle: "Cloud Capacity Math: Where The Remainder Gets Divided",
        articleDescription: "This problem shows how a short arithmetic procedure can model that reality, and how a small Python program can turn the logic into a reusable tool for any team facing the same decision",
        articleHref: "/a/cloud-capacity-math-where-the-remainder-gets-divided.html"
        },
        {
        articleTitle: "The Three Moves That Split Any Whole Into Shares",
        articleDescription: "Operations teams do not solve fractions of a whole with multiplication",
        articleHref: "/a/the-three-moves-that-split-any-whole-into-shares.html"
        },
        {
        articleTitle: "Powers Of Ten, Radix Points, And The Conveyor Belts Of North America",
        articleDescription: "Logistics planning across borders depends on an arithmetic that looks ordinary until it goes wrong. A single miscounted column in a decimal addition can throw off procurement orders, shipping volumes, and capital allocation across an entire trade corridor. This problem traces the mechanics of decimal addition through a conveyor belt installation and shows how place value, radix points, and powers of ten turn separate measurements into a total a planner can act on.",
        articleHref: "/a/powers-of-ten-radix-points-and-the-conveyor-belts-of-north-america.html"
        },
        {
        articleTitle: "The Shortcut Field Estimators Use For Edge Installation Time",
        articleDescription: "The trick that turns one-off arithmetic into a repeatable algorithm is recognizing which constants change",
        articleHref: "/a/the-shortcut-field-estimators-use-for-edge-installation-time.html"
        },
        {
        articleTitle: "The day count hiding inside every API credit bundle",
        articleDescription: "This article shows how unit rate reasoning produces that ratio, how Python's built-in <code>divmod()</code> function mirrors the logic of long division to return both a complete-day count and a leftover-credit remainder, and how the same calculation can be packaged as a reusable Claude skill.",
        articleHref: "/a/the-day-count-hiding-inside-every-api-credit-bundle.html"
        },
        {
        articleTitle: "From fractions to minutes: the billing gap consultants calculate daily",
        articleDescription: "Consultants often face the challenge of billing clients accurately",
        articleHref: "/a/from-fractions-to-minutes-the-billing-gap-consultants-calculate-daily.html"
        },
        {
        articleTitle: "The fractional math behind agenda planning",
        articleDescription: "Before a director walks into a room, she can verify in seconds whether her fractional allocations are realistic or whether they silently consume most of the clock.",
        articleHref: "/a/the-fractional-math-behind-agenda-planning.html"
        },
        {
        articleTitle: "The linear equation inside a mixed shipment",
        articleDescription: "Operational teams that manage ingredient sourcing rarely deal with one shipment at a time.",
        articleHref: "/a/the-linear-equation-inside-a-mixed-shipment.html"
        },
        {
        articleTitle: "The least common multiple that saved a launch budget",
        articleDescription: "When marketing funds are split across multiple channels, the question is not how much each allocation costs, but whether the sum of those allocations still leaves room for the unexpected",
        articleHref: "/a/the-least-common-multiple-that-saved-a-launch-budget.html"

        },
        {
        articleTitle: "How mixed numbers track billable hours",
        articleDescription: "Whether the context is client billing or compliance reporting, the ability to determine how much time remains in a block is a practical operational skill",
        articleHref: "/a/how-mixed-numbers-track-billable-hours.html"
        },
        {
        articleTitle: "26,104 tasks, two reps, one arithmetic rule",
        articleDescription: "Multi-step arithmetic is the skeleton of nearly every operational decision in business. When teams scale, pricing tiers diverge, and resource consumption compounds, the ability to chain simple operations — add, multiply, subtract — without reaching for a calculator separates analysts who lead the room from analysts who confirm after the meeting.This problem demonstrates how a realistic SaaS scenario transforms classroom arithmetic into a decision-support tool, and how two mental math strategies — fast estimation and systematic decomposition — serve different moments in the same workflow.",
        articleHref: "/a/two-reps-one-arithmetic-rule.html"
        },
        {
        articleTitle: "The allocation hiding in every cloud transfer budget",
        articleDescription: "This article walks through the full pipeline: a business math problem, its step-by-step solution, the historical lineage of the least common denominator from Euclid to 9th-century Baghdad, a reusable Python program built on exact rational arithmetic, and a packaged Claude skill",
        articleHref: "/a/the-allocation-hiding-in-every-cloud-transfer-budget.html"

        },
        {
        articleTitle: "The cascading fractions of sequential harvest allocation",
        articleDescription: "Agricultural and supply chain operations depend on sequential allocation logic",
        articleHref: "/a/the-cascading-fractions-of-sequential-harvest-allocation.html"
        },
        {
        articleTitle: "Exact fractional arithmetic for bulk sourcing gaps",
        articleDescription: "This problem illustrates how addition and subtraction of mixed numbers directly models a real sourcing scenario",
        articleHref: "/a/exact-fractional-arithmetic-for-bulk-sourcing-gaps.html"
        },
        {
        articleTitle: "The quarts hiding inside a mixed-number procurement sample",
        articleDescription: "This problem illustrates how unit conversion with mixed numbers underpins everyday supply-chain arithmetic, and how aPython script and a reusable Claude skill can make that calculation repeatable and error-free",
        articleHref: "/a/the-quarts-hiding-inside-a-mixed-number-procurement-sample.html"
        },
        {
        articleTitle: "The allocation math behind field distribution",
        articleDescription: "Field distribution decisions happen every time a manager allocates a fixed supply across a variable- size team. Knowing how many people you can serve — and how that number shifts when supply shrinks by a known fraction — is the kind of arithmetic that prevents both waste and shortfall. This article works through the calculation using a business scenario, two reusable Python programs, and a structured skill file that packages the logic for repeated use.",
        articleHref: "/a/the-allocation-math-behind-field-distribution.html"

        },
        {
        articleTitle:  "The unit rate hiding inside every workforce reassignment",
        articleDescription: "Operations teams constantly shift staff between tasks with different durations",
        articleHref: "/a/the-unit-rate-hiding-inside-every-workforce-reassignment.html"

        },
        {
        articleTitle:  "The Unit Trap Hiding Inside Every Fractional Budget Split",
        articleDescription: "This article traces a single problem through three transformations — a business reframe, a reusable Python program, and a deployable skill document",
        articleHref: "/a/fractional-budget-split.html"

        },
        {
        articleTitle:  " The Inventory Math Procurement Teams Skip",
        articleDescription: "This article walks through the full chain: business problem transformation,step-by-step fraction arithmetic with a practical LCD shortcut, two Python implementations",
        articleHref: "/a/the-inventory-math-procurement-teams-skip.html"
        }, 
        {
        articleTitle:  "The Fraction Trap In Billable Hour Allocation",
        articleDescription: "Resource allocation decisions hide some of the most consequential arithmetic in business.",
        articleHref: "/a/the-fraction-trap-in-billable-hour-allocation.html"
        },
        {
        articleTitle:  "The One-Step Equation That Turns Absences Into Headcount",
        articleDescription: "how a single one-step equationtranslates that partial information into actionable team size, and how Python can make the same",
        articleHref: "/a/the-one-step-equation-that-turns-absences-into-headcount.html"
        },
        {
        articleTitle:  "Three Reps, One Baseline: The Multiplier Math Behind Every Sales Leaderboard",
        articleDescription: "This problem explores the mathematical principles behind sales leaderboards, focusing on how multipliers can be leveraged.",
        articleHref: "/a/the-multiplier-math-behind-every-sales-leaderboard.html"
        },
        {
        articleTitle:  "Add Before You Convert: Unit Math For Biobank Sample Intake",
        articleDescription: "Biobanks record weight in specific units for compliance. This problem demonstrates how unit conversion combined with mixed-number arithmetic underpins a routine but high-stakes data-entry task, and how a small Python tool can eliminate manual error",
        articleHref: "/a/unit-math-for-biobank-sample-intake.html"
        },
        {
        articleTitle:  "The Ceiling Math Behind Cloud Migrations",
        articleDescription: "Capacity planning in cloud operations rarely lines up perfectly. This problem illustrates how ceiling division turns an imprecise remainder into an exact operational decision, and how that same logic can be packaged into a reusable Python tool and a portable Claude skill.",
        articleHref: "/a/the-ceiling-math-behind-cloud-migrations.html"
        },
        {
        articleTitle:  "The Ceiling Function In Supply Chain: A Minimum-Container Problem For Pharmaceutical Distribution",
        articleDescription: "Container planning sits at the intersection of arithmetic and operational risk",
        articleHref: "/a/the-ceiling-function-in-supply-chain.html"
        }, 
       {
            articleTitle: "Rate-Of-Change Decisions In Retail Planning",
            articleDescription: "Retail operations teams make rate-of-change decisions every day — adjusting pricing levers,promotional intensity, or replenishment cadence to hit a precise endpoint.",
            articleHref: "/a/rate-of-Change-decisions-in-retail-planning.html"    
       },
       {
            articleTitle: "The Hidden Arithmetic Of Enterprise Licensing ",
            articleDescription: " Before a product reaches the market, companies must calculate how operational choices cascade into  figures.",
            articleHref: "/a/the-hidden-arithmetic-of-enterprise-licensing`.html"    
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
            articleTitle: "Marketing recipes that end in small disasters Text",
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


