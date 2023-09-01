//SIRVE EL NEWSLETTER EN ESPAÑOL
const newsletter_es = `   
<h4>Subscribe</h4>
            
<p>Dear reader, subscribe and receive for free a collection of short stories. Subscribers can take part in
marketing research projects (and get prizes), and being beta readers </p>

<form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

`;
document.getElementById('us-newsletter').insertAdjacentHTML('afterbegin', newsletter_es);
//problem ? in the regex: an escaped dot (just erase the regex)
//action="/us-thanks-for-your-submission"   
//    data-netlify="true"
//method="POST"

 