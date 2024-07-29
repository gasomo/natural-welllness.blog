// Add your JavaScript here
document.addEventListener('DOMContentLoaded', function() {
  emailjs.init('jj1eHDfiYgA1B0JEb');

document.getElementById('open-pdf-btn').addEventListener('click', function() {
    const fileId = '1qRdktgcfl3MsrBzlJjJlE3IqHyVTLCg3';
    const iframe = document.getElementById('pdf-frame');
    iframe.src = `https://drive.google.com/file/d/${fileId}/preview`;
    
    const container = document.getElementById('pdf-container');
    container.style.display = 'block';
});

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
.oval-button {
    background-color: #4CAF50; /* Green background */
    border: none; /* Remove borders */
    color: white; /* White text */
    padding: 15px 32px; /* Some padding */
    text-align: center; /* Center the text */
    text-decoration: none; /* Remove underline */
    display: inline-block; /* Get the element to line up nicely */
    font-size: 16px; /* Increase font size */
    margin: 4px 2px; /* Some margin */
    cursor: pointer; /* Pointer/hand icon */
    border-radius: 50px; /* Rounded corners */
    transition-duration: 0.4s; /* 0.4 second transition effect to hover state */
}

.oval-button:hover {
    background-color: white; /* Green background on hover */
    color: black; /* Black text on hover */
    border: 2px solid #4CAF50; /* Add a border on hover */
}
