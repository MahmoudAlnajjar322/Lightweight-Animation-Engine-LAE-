const observerTextAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let holder = entry.target;
        const classes = holder.classList;
        let delay;
        let duration = 0;

        classes.forEach((classname) => {
          const split = classname.split("-");
          if (split[0] === "delay") {
            delay = split[1];
          }

          if(split[0] === 'duration') {
            duration = split[1]
          }else{
            duration = 200
          }
        });
        if (holder) {
          setTimeout(() => {
            for (let i = 0; i < holder.children.length; i++) {
              holder.children[i].style.transitionDelay = duration * i + 'ms'
              holder.children[i].classList.add('text-show')
            }
          }, delay);

          observerTextAnimation.unobserve(holder);
        }
      }
    });
  },
  { threshold: 0.3 }
);

const observerImgAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        console.log('Executed')
      let holder = entry.target
      const classes = holder.classList

      let delay;

      classes.forEach(classname => {
        const split = classname.split('-')
        if(split[0] === 'delay') {
          delay = split[1]
        }
      });

      if(holder) {
        setTimeout(() => {
          setTimeout(() => {
            holder.classList.add('image-show-1')
          }, 100);
  
          setTimeout(() => {
            holder.classList.add('image-show-2')
          }, 1200);
        }, delay);

        observerImgAnimation.unobserve(holder)
        }
      }
    });

  },
  { threshold: 0.5 }
);

window.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelectorAll(".text-animation");
  const image = document.querySelectorAll(".image");

  text.forEach(element => {
    const split = element.textContent.split(' ')
    let result = ''

    split.forEach(word => {
      result += '<span>' + word + '</span> '
    });

    element.innerHTML = result
    observerTextAnimation.observe(element)
  });

  image.forEach((el) => observerImgAnimation.observe(el));
});
