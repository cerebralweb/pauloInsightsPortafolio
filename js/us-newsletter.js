//SIRVE EL NEWSLETTER EN ESPAÑOL
const newsletter_es = `   
<h4>Subscribe</h4>
            
<p>Dear reader, subscribe and receive for free a collection of short stories. Subscribers can take part in
marketing research projects (and get prizes), and being beta readers </p>
<form 
    name="contact" 
    
    
    netlify>
  
  <input 
  type="hidden"
  name="form-name"
  value="contact"
  >  
  
  <p>
  <label for="email">Your email:
    <input 
    name="email"
    type="email"
    required
    title="It should be a valid email :)"
    pattern="[a-zA-Z0-9_.]{5,31}@(([a-zA-Z0-9]{2,6}\.)([a-zA-Z0-9]{2,4})){1}(\.[a-zA-Z0-9]{2,3})?"
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
//    data-netlify="true"
//method="POST"

 