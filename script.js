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

  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Event 1',
        start: '2024-08-01'
      },
      {
        title: 'Event 2',
        start: '2024-08-15'
      }
    ]
  });

  calendar.render();
});
// Example JavaScript to toggle animation
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    
    // Add your JS code here to control the animation if needed
});
