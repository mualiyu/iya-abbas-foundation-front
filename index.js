var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

   let activeIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
let autoplayInterval;

function updateSlides() {
  items.forEach((item, index) => {
    item.classList.toggle('active', index === activeIndex);
  });
  
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === activeIndex);
  });
}

function nextSlide() {
  activeIndex = (activeIndex + 1) % items.length;
  updateSlides();
  resetAutoplay();
}

function prevSlide() {
  activeIndex = (activeIndex - 1 + items.length) % items.length;
  updateSlides();
  resetAutoplay();
}

function goToSlide(index) {
  activeIndex = index;
  updateSlides();
  resetAutoplay();
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(nextSlide, 5000);
}

// Start autoplay
resetAutoplay();

// Clean up autoplay on page unload
window.addEventListener('unload', () => {
  clearInterval(autoplayInterval);
});

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  // SVG for Minus icon
  const minusSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  `;

  // SVG for Plus icon
  const plusSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0';
    icon.innerHTML = plusSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.innerHTML = minusSVG;
  }
}


document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.tab');
  let contents = document.querySelectorAll('.tab-content');

  tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
          let targetId = tab.id.replace('Tab', 'Content');

          // Hide all content divs
          contents.forEach(function (content) {
              content.classList.add('hidden');
          });

          // Remove active class from all tabs
          tabs.forEach(function (tab) {
              tab.classList.remove('text-white', 'bg-emerald-600');
              tab.classList.add('text-gray-500');
          });

          // Show the target content
          document.getElementById(targetId).classList.remove('hidden');

          // Add active class to the clicked tab
          tab.classList.add('text-white', 'bg-emerald-600');
          tab.classList.remove('text-gray-500');
      });
  });
});


 // Toggle Dropdown on Mobile
  function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;
    dropdown.style.maxHeight = dropdown.style.maxHeight ? null : dropdown.scrollHeight + "px";
  }

