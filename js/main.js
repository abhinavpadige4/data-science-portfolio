document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      menuToggle.querySelector('.menu-icon').textContent = expanded ? '☰' : '✕';
    });

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.querySelector('.menu-icon').textContent = '☰';
      });
    });
  }

  // Smooth Scrolling for Anchor Links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without scrolling
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // Active Navigation Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollY = window.pageYOffset + 100;

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');

      if (navLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Header Scroll Effect
  const header = document.querySelector('header');

  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // Contact Form Validation
  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    const formFields = contactForm.querySelectorAll('input, textarea');
    const errorMessages = {};

    function validateField(field) {
      const name = field.name;
      const value = field.value.trim();
      let error = '';

      switch (name) {
        case 'name':
          if (!value) {
            error = 'Please enter your name.';
          } else if (value.length < 2) {
            error = 'Name must be at least 2 characters.';
          }
          break;

        case 'email':
          if (!value) {
            error = 'Please enter your email address.';
          } else if (!isValidEmail(value)) {
            error = 'Please enter a valid email address.';
          }
          break;

        case 'subject':
          if (!value) {
            error = 'Please enter a subject.';
          }
          break;

        case 'message':
          if (!value) {
            error = 'Please enter a message.';
          } else if (value.length < 10) {
            error = 'Message must be at least 10 characters.';
          }
          break;

        default:
          if (field.required && !value) {
            error = 'This field is required.';
          }
      }

      return error;
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function showError(field, message) {
      const errorElement = field.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('visible');
      }
      field.classList.add('invalid');
    }

    function clearError(field) {
      const errorElement = field.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('visible');
      }
      field.classList.remove('invalid');
    }

    formFields.forEach(function(field) {
      field.addEventListener('blur', function() {
        const error = validateField(field);
        if (error) {
          showError(field, error);
        } else {
          clearError(field);
        }
      });

      field.addEventListener('input', function() {
        if (field.classList.contains('invalid')) {
          const error = validateField(field);
          if (!error) {
            clearError(field);
          }
        }
      });
    });

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      formFields.forEach(function(field) {
        const error = validateField(field);
        if (error) {
          showError(field, error);
          isValid = false;
        } else {
          clearError(field);
        }
      });

      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call if needed)
        setTimeout(function() {
          submitBtn.textContent = 'Message Sent!';
          submitBtn.classList.add('success');
          contactForm.reset();

          setTimeout(function() {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('success');
          }, 3000);
        }, 1500);
      }
    });
  }

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  // Project Card Hover Effects
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'translateY(0)';
    });
  });

  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Skill Progress Bars Animation
  const skillBars = document.querySelectorAll('.skill-bar');

  if (skillBars.length > 0) {
    const skillObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const progress = entry.target.querySelector('.skill-progress');
          if (progress) {
            const width = progress.getAttribute('data-width');
            setTimeout(function() {
              progress.style.width = width + '%';
            }, 200);
          }
          skillObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    skillBars.forEach(function(bar) {
      skillObserver.observe(bar);
    });
  }

  // Typing Effect for Hero Section
  const typingElement = document.querySelector('.typing-text');

  if (typingElement) {
    const phrases = typingElement.getAttribute('data-phrases') ? typingElement.getAttribute('data-phrases').split(',') : ['Data Scientist', 'Machine Learning Enthusiast', 'Python Developer'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
  }

  // Initialize current year in footer
  const yearElement = document.querySelector('.current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  console.log('Portfolio JavaScript initialized successfully.');
});