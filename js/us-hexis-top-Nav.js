//create HTML content
const miNavEs = `<div class="topnav" id="myTopnav">
<img class="logo1" src="/favicon/logoHexis1.svg">

<!--<<<<<<<<<<< <a href="" target="_self" id="traducir">EN</a> >>>>>>>>>>>-->

<a  href="/index.html">C.L. Palacios</a>
<a href="/index.html#tip">About</a>
<div class="dropdown">
    <button class="dropbtn">Qualitative Research
     <i class="fa fa-caret-down"></i>
    </button>

    <div class="dropdown-content">
        <a href="href="/us-infographics-404.html">Focus Groups</a>
        <a href="href="/us-infographics-404.html">Online Communities</a>
        <a href="href="/us-infographics-404.html">Ethnography</a>
    </div>
</div>

<div class="dropdown">
    <button class="dropbtn">Data Skills <i class="fa fa-caret-down"></i>
    </button>

    <div class="dropdown-content">
        <a href="/us-infographics-404.html">SQL</a>
        <a href="/index.html">Python</a>
        <a href="/index.html">Excel</a>
        <a href="/us-infographics-404.html">Power Bi</a>
        <a href="/us-infographics-404.html">Tableau</a>       
        
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
