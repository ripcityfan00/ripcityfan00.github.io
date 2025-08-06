const album = document.getElementById("album");
const restartBtn = document.getElementById("restartBtn");

function scrollAlbum(direction) {
  const scrollAmount = window.innerWidth;

  album.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

// IntersectionObserver for fade in/out pages
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

// Show/hide restart button based on scroll position
album.addEventListener('scroll', () => {
  const maxScrollLeft = album.scrollWidth - album.clientWidth;
  if (album.scrollLeft >= maxScrollLeft - 10) {
    restartBtn.style.display = "block";
  } else {
    restartBtn.style.display = "none";
  }
});

// Restart button function
function restartAlbum() {
  album.scrollTo({
    left: 0,
    behavior: "smooth"
  });
  restartBtn.style.display = "none";
}
