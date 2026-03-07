const introContent = document.getElementById('introContent');
const revealDelayMs = 3800; // 3.8s: trong khoảng user yêu cầu 3-5 giây

if (introContent) {
  window.addEventListener('load', () => {
    window.setTimeout(() => {
      introContent.classList.add('show');
    }, revealDelayMs);
  });
}
