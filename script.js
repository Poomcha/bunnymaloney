document.addEventListener("DOMContentLoaded", () => {
  const animationImages = document.querySelectorAll(".animimg");
  let state = 0;
  const animate = (animationImages) => {
    setInterval(() => {
      animationImages.forEach((image, index) => {
        if (index !== state) {
          image.classList.add("hidden");
        }
      });
      animationImages[state].classList.toggle("hidden");
      state = (state + 1) % 7;
    }, 100);
  };
  animate(animationImages);
});
