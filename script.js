const introContent = document.getElementById('introContent');
const revealDelayMs = 3800; // 3.8s: trong khoảng user yêu cầu 3-5 giây
const galaxyLights = document.getElementById('galaxyLights');
const shareLinkInput = document.getElementById('shareLink');
const copyShareLinkButton = document.getElementById('copyShareLink');

if (introContent) {
  window.addEventListener('load', () => {
    window.setTimeout(() => {
      introContent.classList.add('show');
    }, revealDelayMs);
  });
}

if (galaxyLights) {
  const starCount = 50;
  const starCount = 70;

  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement('span');
    star.className = 'star';

    if (i % 8 === 0) {
    if (i % 7 === 0) {
      star.classList.add('large');
    }

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--twinkle-duration', `${2.8 + Math.random() * 3.8}s`);
    star.style.setProperty('--twinkle-delay', `${Math.random() * 2.5}s`);

    star.style.setProperty('--twinkle-duration', `${2.6 + Math.random() * 3.6}s`);
    star.style.setProperty('--twinkle-delay', `${Math.random() * 2.8}s`);
    galaxyLights.appendChild(star);
  }
}

if (shareLinkInput) {
  const currentUrl = window.location.href;
  const isLocalFile = currentUrl.startsWith('file://');

  if (!isLocalFile) {
    shareLinkInput.value = currentUrl;
  }
}

if (copyShareLinkButton && shareLinkInput) {
  copyShareLinkButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(shareLinkInput.value);
      copyShareLinkButton.textContent = 'Đã copy ✓';

      window.setTimeout(() => {
        copyShareLinkButton.textContent = 'Copy link';
      }, 1800);
    } catch (error) {
      copyShareLinkButton.textContent = 'Không copy được';
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
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px'
    }
  });
  );

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}
