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

//   function handleSubmit(button) {
//   const emailInput = document.getElementById('email');
//   const emailValue = emailInput.value.trim();
//   const btnText = button.querySelector('.btn-text');
//   const spinner = button.querySelector('.spinner');

//   // Check if email is not empty
//   if (emailValue === '') {
//     alert("Please enter your email.");
//     return;
//   }else(){
//     alert("Form submitted");
//   }

//   // Show spinner, hide arrow
//   btnText.style.display = 'none';
//   spinner.style.display = 'inline-block';

//   // Simulate processing delay
//   setTimeout(() => {
//     // Hide spinner, show arrow again
//     btnText.style.display = 'inline';
//     spinner.style.display = 'none';

//     alert("Form submitted!");
//     // Optionally clear the input
//     // emailInput.value = '';
//   }, 2000);
// }