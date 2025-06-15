const text = document.querySelector('.circle-text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
    `<span style="transform:rotate(${i * 8.2}deg)">${char}</span>`
  ).join("");


function handleClick() {
    window.location.href = "https://reysion-its.com/contact"; // or any URL
}

// js for animated text
const animatedText = document.getElementById('animatedText');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatedText.classList.add('visible');
      } 
    });
  },
  {
    threshold: 0.1
  }
);
observer.observe(animatedText);

document.addEventListener('DOMContentLoaded', function() {
  const box = document.querySelector('.box-for-line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        box.classList.add('animate-line');
      }
    });
  }, {
    threshold: 0.5 // triggers when 50% of the element is visible
  });

  observer.observe(box);
});

// for loading button
function handleSubmit(button) {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();

  const btnText = button.querySelector('.btn-text');
  const spinner = button.querySelector('.spinner');

  // Prevent default form submission
  event.preventDefault();

  if (emailValue === '') {
    alert("Please enter your email.");
    return; // Do nothing
  }

  // Check if email ends with @gmail.com
  if (!emailValue.endsWith('@gmail.com')) {
    alert("Please enter a valid mail address (e.g., yourname@gmail.com).");
    return;
  }

  // Show spinner and hide icon
  btnText.style.display = 'none';
  spinner.style.display = 'inline-block';

  // Simulate form processing
  setTimeout(() => {
    spinner.style.display = 'none';
    btnText.style.display = 'inline-block';
    alert("Thankyou for subscribing our newsletter");
    emailInput.value = ''; 
  }, 2000);
}

// js for navbar button
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
  });
});

// js for adjusting slide hight
function adjustSlideHeight() {
  const slides = document.querySelectorAll('.slide');
  const width = window.innerWidth;
  const height = window.innerHeight;

  slides.forEach(slide => {
    if(width > 480){
        if (height > width) {
          slide.style.height = '50vh';
      } else {
          slide.style.height = '100vh';
      }
    }else{
      slide.style.height = '100vh';
    }
  });
}
// Run on load
window.addEventListener('load', adjustSlideHeight);
// Run on resize
window.addEventListener('resize', adjustSlideHeight);