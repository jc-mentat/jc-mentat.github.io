const toggle = document.getElementById('dark-toggle');
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.dataset.theme = 'dark';
  toggle.textContent = '☀️';
} else {
  toggle.textContent = '🌙';
}
toggle.addEventListener('click', () => {
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', html.dataset.theme);
  toggle.textContent = html.dataset.theme === 'dark' ? '☀️' : '🌙';
});