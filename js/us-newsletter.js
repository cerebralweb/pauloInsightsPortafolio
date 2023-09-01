//SIRVE EL NEWSLETTER EN ESPAÑOL
const newsletter_es = `   
<h4>Subscribe</h4>
            
<p>Dear reader, subscribe and receive for free a collection of short stories. Subscribers can take part in
marketing research projects (and get prizes), and being beta readers </p>
<form 
    name="contact CL Palacios" 
    action="https://api.staticforms.xyz/submit"
    method="post" 
    
    >
  
    <input type="hidden" name="accessKey" value="b22da0ec-8a32-4614-a194-9a4c43055aac">
    <input type="hidden" name="redirectTo" value="https://www.clpalacios.in/us-infographics-404.html">
  
  <p>
  <label for="email">Your email:
    <input 
    name="email"
    type="email"    
    >
    
  </label>
  </p>
 
  <p>
    <button type="submit">Send</button>
  </p>
</form>
`;
document.getElementById('us-newsletter').insertAdjacentHTML('afterbegin', newsletter_es);
//problem ? in the regex: an escaped dot (just erase the regex)
//action="/us-infographics-404.html"  
// data-netlify="true"
//method="POST"

//required
//title="It should be a valid email :)"
//pattern="[a-zA-Z0-9_.]{5,31}@(([a-zA-Z0-9]{2,6}\.)([a-zA-Z0-9]{2,4})){1}(\.[a-zA-Z0-9]{2,3})?"

 