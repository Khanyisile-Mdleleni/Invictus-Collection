document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      id: 1,
      product: "Sneaker",
      name: "Masego Matilda Sejoe ",
      image: "images/sneaker1.jpg",
      stars: 5,
      comment:
        "The owner always communicates patiently & kindly to buyers as to when they will receiver their orders.",
    },
    {
      id: 2,
      product: "iPhone",
      name: "Amanda Khalela",
      image: "images/iphone1.jpg",
      stars: 4,
      comment:
        "The iPhone has exceeded my expectations. Great features and design.",
    },
    {
      id: 3,
      product: "Sneaker",
      name: "Onelisiwe Tshwane",
      image: "images/sneaker2.jpg",
      stars: 4,
      comment:
        "I love the unique design of these sneakers. Best quality in affordable price.",
    },
  ];

  const testimonialsContainer = document.getElementById(
    "testimonialsContainer"
  );

  testimonials.forEach((testimonial) => {
    const testimonialElem = document.createElement("div");
    testimonialElem.classList.add("testimonial");

    testimonialElem.innerHTML = `
      <div class="testimonial-image">
        <img src="${testimonial.image}" alt="${testimonial.product}">
      </div>
      <div class="testimonial-details">
        <div class="testimonial-header">
          <h3>${testimonial.name}</h3>
          <div class="stars">${"&#9733;".repeat(testimonial.stars)}</div>
        </div>
        <p class="comment">${testimonial.comment}</p>
      </div>
    `;

    testimonialsContainer.appendChild(testimonialElem);
  });
});
