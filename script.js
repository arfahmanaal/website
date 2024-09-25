// JavaScript for Time Tracking
let timeSpent = 0;
const timeSpentDisplay = document.getElementById('timeSpent');

setInterval(() => {
  timeSpent++;
  const hours = Math.floor(timeSpent / 3600);
  const minutes = Math.floor((timeSpent % 3600) / 60);
  const seconds = timeSpent % 60;

  timeSpentDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}, 1000);
let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.classList.remove('active');
        if (i === index) {
            banner.classList.add('active');
        }
    });
}

function nextBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    showBanner(currentBanner);
}

setInterval(nextBanner, 3000); // Change banner every 3 seconds
