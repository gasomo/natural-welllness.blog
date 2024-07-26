// Add your JavaScript here
document.addEventListener('DOMContentLoaded', function() {
  emailjs.init('jj1eHDfiYgA1B0JEb');

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_b85cx1l', 'template_tbfktac', this)
      .then(function() {
        alert('Your message has been sent successfully!');
      }, function(error) {
        alert('There was an error sending your message: ' + JSON.stringify(error));
      });
  });
});
