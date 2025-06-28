document.addEventListener("DOMContentLoaded", () => {
  const animationImages = document.querySelectorAll(".animimg");
  let state = 0;
  let first = true;
  const animate = (animationImages) => {
    setInterval(() => {
      if (!first) {
        const prev = state === 0 ? 7 : state - 1;
        animationImages[prev].classList.toggle("hidden");
      }
      animationImages[state].classList.toggle("hidden");
      first = false;
      state = (state + 1) % 8;
    }, 100);
  };
  animate(animationImages);
});
