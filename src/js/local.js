const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

const savedSettings = localStorage.getItem('settings');

if (savedSettings) {
    const parsedSettings = JSON.parse(savedSettings);
}
