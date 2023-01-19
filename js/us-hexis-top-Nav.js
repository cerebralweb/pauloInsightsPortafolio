//create HTML content
const miNavEs = `<div class="topnav" id="myTopnav">
<img class="logo1" src="/favicon/logoHexis1.svg">

<!--<<<<<<<<<<< <a href="" target="_self" id="traducir">EN</a> >>>>>>>>>>>-->

<a  href="/index.html">C.L. Palacios</a>
<a href="/index.html#tip">About</a>
<div class="dropdown">
    <button class="dropbtn">Social Media
     <i class="fa fa-caret-down"></i>
    </button>

    <div class="dropdown-content">
        <a href="https://www.instagram.com/clpalacios.in/">Instagram</a>
        <a href="">Twitter</a>
    </div>
</div>

<div class="dropdown">
    <button class="dropbtn">Ideas <i class="fa fa-caret-down"></i>
    </button>

    <div class="dropdown-content">
        <a href="/a/design-fiction.html" /infografias.html">Design Fiction</a>
        <a href="/index.html">Blog</a>
        <a href="/a/podcasts.html">Podcast</a>
        
    </div>
</div>


<a class="icon" onclick="responsiveIcon()">&#9776;</a>

</div>`;
//render IN a container id
document.getElementById('us-hexis-top-Nav').insertAdjacentHTML('afterbegin', miNavEs);
//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
document.getElementById('traducir').href = traducir;

function responsiveIcon() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}
