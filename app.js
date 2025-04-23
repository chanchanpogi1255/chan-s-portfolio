document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 900,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = document.querySelectorAll(".progress-bar-animate");
        bars.forEach((bar) => {
          const target = bar.getAttribute("data-target");
          bar.style.width = target;
        });
        observer.disconnect();
      }
    });
  });

  const section = document.querySelector("#skills");
  if (section) {
    observer.observe(section);
  }
});
document.querySelector(".burger").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
});
