document.addEventListener('DOMContentLoaded', () => {
  console.log('About page loaded – Welcome to New Smart Farms!');
  
  // Simple animation effect
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
  });

  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.transition = 'all 0.6s ease-out';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
