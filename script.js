// Rare Flowers - XTHEFLARE
// Release countdown + interactions

document.addEventListener("DOMContentLoaded", () => {

  // Countdown Timer
  const releaseDate = new Date("September 7, 2026 15:00:00 EST").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML =
        "<div class='release-live'>RARE FLOWERS IS OUT NOW</div>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );
    const seconds = Math.floor(
      (distance % (1000 * 60)) /
      1000
    );

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerHTML = days;
    if (hoursEl) hoursEl.innerHTML = hours;
    if (minutesEl) minutesEl.innerHTML = minutes;
    if (secondsEl) secondsEl.innerHTML = seconds;

  }, 1000);


  // Footer Year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // Fade-in animation
  const elements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });

});
