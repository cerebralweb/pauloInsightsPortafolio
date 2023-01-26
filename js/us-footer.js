

const us_footer = ` <div class="caja-child-footer">

</div>

<div class="caja-child-footer contenedor-site-map">

<p><a href="#us-newsletter" class="class2" href="/us-insights.html">Subscribe</a></p>
<p><a href="#tip" class="class2" href="/us-about.html">About me</a></p>
<p><a class="class2" href="/index.html">TikTok</a></p>                        
<p><a class="class2" href="https://www.facebook.com/clpalacios.in">Facebook</a></p>


</div>
<div class="caja-child-footer contenedor-site-map">

<p><a class="class2" href="/index.html">Home</a></p>
<p><a class="class2" href="/toc/page1.html">Blog</a></p>
<p><a class="class2" href="">Diary of a Z Girl</a></p>            
<p><a  href="#freeReading" class="class2" href="">Free Stories</a></p>

</div>

<div class="caja-child-footer contenedor-site-map">


</div>

<div class="caja-child-footer">
<address class="contenedorAdress">    
    <p>Mexico City</p>
    <p><a class="class2" href=""><span itemprop="availableChannel">Email Me</span></a> </p>
    <p><span itemprop="availableChannel"> 324-546-8875 </span> </p>
</address>
</div>`
document.getElementById("us-footer").insertAdjacentHTML('afterbegin', us_footer);

//COPY RIGHTS
document.getElementById("copyRights").textContent = "C.L Palacios 2023";




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