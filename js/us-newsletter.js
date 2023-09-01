//SIRVE EL NEWSLETTER EN ESPAÑOL
const newsletter_es = `   
<h4>Subscribe</h4>
            
<p>Dear reader, subscribe and receive for free a collection of short stories. Subscribers can take part in
marketing research projects (and get prizes), and being beta readers </p>
<form action="https://api.staticforms.xyz/submit" method="post">
        <!-- Replace with accesKey sent to your email -->
        <input type="hidden" name="accessKey" value="b22da0ec-8a32-4614-a194-9a4c43055aac"> <!-- Required -->
        <input type="text" name="name"> <!-- Optional -->
        <input type="text" name="subject"> <!-- Optional -->
        <input type="text" name="email"> <!-- Optional -->
        <input type="text" name="phone"> <!-- Optional -->
        <textarea name="message"></textarea> <!-- Optional -->
        <!-- If you want replyTo to be set to specific email -->
        <input type="text" name="replyTo" value="myreplytoemail@example.com"> <!-- Optional -->
        <!-- Specify @ as reply to value if you want it to be customers email -->
        <input type="hidden" name="replyTo" value="@"> <!-- Optional -->
        <!-- If you want form to redirect to a specific url after submission -->
        <input type="hidden" name="redirectTo" value="https://example.com/contact/success"> <!-- Optional -->
        <input type="submit" value="Submit" />
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

 