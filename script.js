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

  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    if (window.innerWidth <= 1280) {
      const src = icon.getAttribute("src");
      const newSrc = [
        src.split("/")[0],
        src.split("/")[1],
        src.split("/")[2].split("_")[0] + "_smart.svg",
      ].join("/");
      icon.setAttribute("src", newSrc);
    }
  });

  const subtitles = document.querySelectorAll(".subtitle");
  subtitles.forEach((subtitle) => {
    if (window.innerWidth <= 1280) {
      subtitle.setAttribute("fill", "#ffffff");
    }
  });
});
