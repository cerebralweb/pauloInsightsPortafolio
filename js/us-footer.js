

const us_footer = ` <div class="caja-child-footer">

</div>

<div class="caja-child-footer contenedor-site-map">

<p><a href="#us-newsletter" class="class2" href="/us-insights.html">Subscribe</a></p>
<p><a href="#tip" class="class2" href="/us-about.html">About me</a></p>
<p><a class="class2" href="/us-infographics-404.html">TikTok</a></p>                        
<p><a class="class2" href="/us-infographics-404.html">Facebook</a></p>


</div>
<div class="caja-child-footer contenedor-site-map">

<p><a class="class2" href="/index.html">Home</a></p>
<p><a class="class2" href="/toc/page1.html">Blog</a></p>
<p><a class="class2" href="us-infographics-404.html">BI Portafolio</a></p>            
<p><a  href="#freeReading" class="class2" href="">More</a></p>

</div>

<div class="caja-child-footer contenedor-site-map">


</div>

<div class="caja-child-footer">
<address class="contenedorAdress">    
<p>Thanks to:</p>
<p><a class="class2" href="https://www.freecodecamp.org/">Freecodecamp</a></p>
<p><a class="class2" href="https://www.netlify.com/pricing/">Netlify</a></p>
<p><a class="class2" href="https://github.com/">Github</a></p>

    
</address>  
</div>

`
document.getElementById("us-footer").insertAdjacentHTML('afterbegin', us_footer);

//COPY RIGHTS
document.getElementById("copyRights").textContent = "Paulo C. León BI, 2025, Mexico City";




/**
 * 
//RENDERS TOP NAV 

//creates a container in the HTML elem with that tag id
var navHull = document.createElement('contenedorParaTopNavScript');
//creates content to be rendered in the container
var miNavEs
 = `<div class="topnav" id="myTopnav">`;
//put the content into container using innerHTML prop
navHull.innerHTML = miNavEs
;
//appends into body
document.body.prepend(navHull);
 */