

document.getElementById('form').addEventListener('submit',(e) => { 

 const main = document.querySelector("main");
 const errorMessage = document.getElementById('error-message')
 const email = document.getElementById("email").value;

 e.preventDefault();
 if (email.includes('@')) {
  document.getElementById('main-card').innerHTML = 
  '<article class=`valid-email`><img src="assets/images/icon-list.svg"><h1>Thanks for subscribing!</h1> <p>A confirmation email has been sent to: <b>' + email + '</b>. Please open it and click the button inside to confirm your subscription.</p><button onclick="dismissMessage()">Dismiss message</button></article>'

  main.classList.add('valid-email')
 } 
 else {
  errorMessage.textContent = 'Valid email required'
 }

})

const dismissMessage = () => {
 main.classList.remove('valid-email')
 document.getElementById('main-card').innerHTML = 
 '<main id="main-card"><div class="info"><h1>Stay updated!</h1><p>Join 60,000+ product managers receiving monthly updates on:</p><ul><li>Product discovery and building what matters</li><li>Measuring to ensure updates are a success</li><li>And much more!</li></ul><form id="form" novalidate><label for="">Email address</label><input type="email" name="email" id="email" placeholder="email@company.com"><span id="error-message"></span><button onclick="validSubmitted()">Subscribe to monthly newsletter</button></form></div><picture></picture>'
}
