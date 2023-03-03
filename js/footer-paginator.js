const footer_paginator = `
<div class="paginator">
      
      <a href="/index.html">1</a>
      <a href="/toc/page1.html">2</a>
      <a href="/us-infographics-404.html">3</a>
      <a href="/us-infographics-404.html">4</a>
      <a href="/us-infographics-404.html">5</a>
      <a href="/us-infographics-404.html">6</a>
      <a href="/us-infographics-404.html">7</a>
      
    </div>
`

document.getElementById("footerPaginator").insertAdjacentHTML('afterbegin', footer_paginator);

/**
 * The following elements can be used in a program to handle the strip
 * <a href="/index.html">&laquo;</a>    
 * <a href="/us-infographics-404.html">&raquo;</a>
 * class="active"
 */