document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Form is valid, you can proceed with form submission logic here
  const formData = new FormData(this);
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  this.reset(); // Reset the form after submission
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      id: 1,
      name: "Khanyisile",
      image: "boy.jpg", 
      stars: 5,
      comment:
        "Outstanding service and creativity from Ace of Digital for my business cards. Highly recommend their expertise.",
    },
    {
      id: 1,
      name: "Khanyisile",
      image: "boy.jpg", 
      stars: 5,
      comment:
        "Outstanding service and creativity from Ace of Digital for my business cards. Highly recommend their expertise.",
    },
    {
      id: 1,
      name: "Khanyisile",
      image: "boy.jpg", 
      stars: 5,
      comment:
        "Outstanding service and creativity from Ace of Digital for my business cards. Highly recommend their expertise.",
    },
   
  ];

  const testimonialsContainer = document.getElementById("testimonialsContainer");

  testimonials.forEach(testimonial => {
    const testimonialElem = document.createElement("div");
    testimonialElem.classList.add("testimonial");

    testimonialElem.innerHTML = `
      <div class="testimonial-image">
        <img src="${testimonial.image}" alt="Client">
      </div>
      <div class="testimonial-details">
        <div class="testimonial-header">
          <h3>${testimonial.name}</h3>
          <div class="stars">${'&#9733;'.repeat(testimonial.stars)}</div>
        </div>
        <p class="comment">${testimonial.comment}</p>
      </div>
    `;

    testimonialsContainer.appendChild(testimonialElem);
  });
});



