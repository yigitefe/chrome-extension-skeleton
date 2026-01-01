import { storage } from '../shared/utils.js';

const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const optionsLink = document.getElementById('go-to-options');

// Initialize
storage.get('count').then((count) => {
    countElement.textContent = count || 0;
});

// Increment
incrementBtn.addEventListener('click', async () => {
    const current = parseInt(countElement.textContent);
    const next = current + 1;
    await storage.set('count', next);
    countElement.textContent = next;
});

// Open options
optionsLink.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
});
