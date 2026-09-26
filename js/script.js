document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form Validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    let isValid = true;
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Clear previous errors
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate email
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Message is required.';
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault();
    }
  });

  function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  }

  // Project Filter
  const filterInput = document.getElementById('project-filter');
  const projects = document.querySelectorAll('.project');

  filterInput.addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    projects.forEach(project => {
      const projectName = project.querySelector('.project-name').textContent.toLowerCase();
      if (projectName.includes(filterValue)) {
        project.style.display = '';
      } else {
        project.style.display = 'none';
      }
    });
  });
});