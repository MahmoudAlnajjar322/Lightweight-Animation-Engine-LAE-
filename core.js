const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let holder = entry.target;
        let delay = Number(holder.getAttribute("data-lae-delay"));
        let duration = Number(holder.getAttribute("data-lae-duration"));
        let ease = holder.getAttribute("data-lae-easing");

        if (duration <= 0) duration = 150;
        if(ease === null) ease = '0.16, 1, 0.3, 1'

        if (holder && holder.classList.contains("lae-text")) {
          setTimeout(() => {
            for (let i = 0; i < holder.childElementCount; i++) {

              console.log(ease)
              holder.children[i].style.transitionTimingFunction =
                "cubic-bezier(" + ease + ")";

              holder.children[i].style.transitionDelay = duration * i + "ms";
              holder.children[i].style.transform = "translate(0 , 0)";
              holder.children[i].style.opacity = "1";
            }
          }, delay);
        }

        if (holder && holder.classList.contains("lae-image")) {

          holder.style.transitionTimingFunction =
          "cubic-bezier(" + ease + ")";

          setTimeout(() => {
            setTimeout(() => {
              holder.style.transform = "translate(0 , 0)";
            }, 100);

            setTimeout(() => {
              holder.style.scale = "1";
            }, 1200);
          }, delay);
        }

        if (holder && holder.classList.contains("lae-fade")) {

          holder.style.transitionTimingFunction =
          "cubic-bezier(" + ease + ")";

          setTimeout(() => {
            setTimeout(() => {
              holder.style.transform = "translate(0)";
              holder.style.opacity = "1";
            }, 100);

            setTimeout(() => {
              holder.style.scale = "1";
            }, duration);
          }, delay);
        }

        observer.unobserve(holder);
      }
    });
  },
  { threshold: 0.3 }
);

const run = () => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const text = document.querySelectorAll(".lae-text");
  const image = document.querySelectorAll(".lae-image");
  const fade = document.querySelectorAll(".lae-fade");

  if (motionQuery.matches) {
    console.log(
      "LAE: Animation engine has been disabled due to user preferring reduced animation (prefers-reduced-motion: reduce)"
    );
    fade.forEach((el) => el.classList.remove("lae-fade"));
    text.forEach((el) => el.classList.remove("lae-text"));
    image.forEach((el) => el.classList.remove("lae-image"));
    return;
  }

  text.forEach((element) => {
    if (element.getAttribute("data-lae-split") === "false")
      observer.observe(element);

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

    let angle = element.getAttribute("data-lae-angle");

    if (angle === null) angle = "0 , -20%";

    for (let i = 0; i < element.childElementCount; i++) {
      element.children[i].style.transform = "translate(" + angle + ")";
    }

    observer.observe(element);
  });

  image.forEach((el) => observer.observe(el));

  fade.forEach((el) => {
    let angle = el.getAttribute("data-lae-angle");

    if (angle === null) angle = "0 , %100";

    el.style.transform = "translate(" + angle + ")";
    observer.observe(el);
  });

  console.log("LAE: system has been run");
};

window.addEventListener("DOMContentLoaded", run);
window.addEventListener("LAE-refresh", run);
