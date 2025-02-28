// Theme switcher functionality
function setupTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', () => {
      if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙';
        currentTheme = 'dark';
      } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '💡';
        currentTheme = 'light';
      }
      localStorage.setItem('theme', currentTheme);
    });
  }
  
  // Execute after DOM is loaded
  document.addEventListener('DOMContentLoaded', setupTheme);