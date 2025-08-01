const pages = document.querySelectorAll('.page');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
}, {
  threshold: 0.5
});

pages.forEach(page => {
  page.style.opacity = 0;
  observer.observe(page);
});
