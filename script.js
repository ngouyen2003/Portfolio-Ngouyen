const introContent = document.getElementById('introContent');
const galaxyLights = document.getElementById('galaxyLights');
const revealDelayMs = 5000;

if (introContent) {
  window.addEventListener('load', () => {
    window.setTimeout(() => {
      introContent.classList.add('show');
    }, revealDelayMs);
  });
}

if (galaxyLights) {
  const starCount = 70;

  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement('span');
    star.className = 'star';

    if (i % 7 === 0) {
      star.classList.add('large');
    }

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--twinkle-duration', `${2.6 + Math.random() * 3.6}s`);
    star.style.setProperty('--twinkle-delay', `${Math.random() * 2.8}s`);
    galaxyLights.appendChild(star);
  }
}

const revealTargets = document.querySelectorAll('.reveal-on-scroll');

if ('IntersectionObserver' in window && revealTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}
