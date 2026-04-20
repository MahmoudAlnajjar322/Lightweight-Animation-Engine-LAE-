const observerTextAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let holder = entry.target;
        let delay = Number(holder.getAttribute("data-lae-delay"));
        let duration = Number(holder.getAttribute("data-lae-duration"));

        if (duration <= 0) duration = 150;

        if (holder) {
          setTimeout(() => {
            for (let i = 0; i < holder.children.length; i++) {
              holder.children[i].style.transitionDelay = duration * i + "ms";
              holder.children[i].classList.add("text-show");
            }
          }, delay);

          holder.classList.remove("text-animation");
          observerTextAnimation.unobserve(holder);
        }
      }
    });
  },
  { threshold: 0.3 }
);

const observerImgAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        let holder = entry.target;
        const delay = Number(holder.getAttribute("data-lae-delay"));

        if (holder) {
          setTimeout(() => {
            setTimeout(() => {
              holder.classList.add("image-show-1");
            }, 100);

            setTimeout(() => {
              holder.classList.add("image-show-2");
            }, 1200);
          }, delay);

          holder.classList.add("animated");
          observerImgAnimation.unobserve(holder);
        }
      }
    });
  },
  { threshold: 0.5 }
);

const run = () => {
  const text = document.querySelectorAll(".text-animation");
  const image = document.querySelectorAll(".image");

  text.forEach((element) => {
    if (element.getAttribute("data-lae-split") === "none")
      observerTextAnimation.observe(element);

    if (element.getAttribute("data-lae-split") === "char") {
      let result = "";

      for (let i = 0; i < element.textContent.length; i++) {
        if (element.textContent[i] === " ") {
          result += " ";
        } else {
          result += "<span>" + element.textContent[i] + "</span>";
        }
      }

      element.innerHTML = result;
    }

    if (
      element.getAttribute("data-lae-split") === "word" ||
      element.getAttribute("data-lae-split") === null
    ) {
      const split = element.textContent.split(" ");
      let result = "";

      split.forEach((word) => {
        result += "<span>" + word + "</span> ";
      });

      element.innerHTML = result;
    }
    observerTextAnimation.observe(element);
  });

  image.forEach((el) => observerImgAnimation.observe(el));
  console.log("LAE: system has been run");
};

window.addEventListener("DOMContentLoaded", run);
window.addEventListener("LAE-refresh", run);
