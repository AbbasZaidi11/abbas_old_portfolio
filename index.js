document.addEventListener("DOMContentLoaded", () => {
  // Wait for all animations to complete
  const animationElements = [
    document.getElementById("hello"),
    document.getElementById("name"),
    document.querySelector(".home-content .about"),
    ...document.querySelectorAll(".home-content .social-media a"),
    document.querySelector(".btn"),
  ];

  // Calculate the longest animation delay
  const longestDelay = Array.from(animationElements).reduce((maxDelay, el) => {
    const delay = parseFloat(window.getComputedStyle(el).animationDelay) * 1000;
    const duration =
      parseFloat(window.getComputedStyle(el).animationDuration) * 1000;
    return Math.max(maxDelay, delay + duration);
  }, 0);

  // Initialize Typed.js after all animations
  setTimeout(() => {
    new Typed(".mytext", {
      strings: [
        "FrontEnd Developer",
        "BackEnd Developer",
        "Competitive Programmer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }, longestDelay + 500); // Add a small buffer
});
