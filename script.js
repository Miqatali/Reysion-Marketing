const text = document.querySelector('.circle-text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
    `<span style="transform:rotate(${i * 8.2}deg)">${char}</span>`
  ).join("");







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

  // Show spinner and hide icon
  btnText.style.display = 'none';
  spinner.style.display = 'inline-block';

  // Simulate form processing
  setTimeout(() => {
    spinner.style.display = 'none';
    btnText.style.display = 'inline-block';
    alert("Thankyou for subscribing our newsletter");
    emailInput.value = ''; // Optional: clear the input field
  }, 2000);
}


// js for navbar button
