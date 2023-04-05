window.addEventListener("load", function () {
  function countUp(target, duration, elementId) {
    const count = document.getElementById(elementId);
    const increment = (target / duration) * 20;

    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      count.innerHTML = Math.round(current);

      if (current >= target) {
        clearInterval(timer);
        count.innerHTML = target;
      }
    }, 2);
  }

  function startCountOnIntersection(entries) {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countUp(500000, 3000, "count");
      }
    });
  }

  function startCountOnIntersection2(entries) {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countUp(2000, 3000, "count2");
      }
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(startCountOnIntersection, options);
  observer.observe(document.querySelector("#count"));

  const observer2 = new IntersectionObserver(
    startCountOnIntersection2,
    options
  );
  observer2.observe(document.querySelector("#count2"));
});
