import { storage } from '../shared/utils.js';

const colorSelect = document.getElementById('color-select');
const saveBtn = document.getElementById('save');
const status = document.getElementById('status');

// Load settings
storage.get('color').then((color) => {
    if (color) colorSelect.value = color;
});

// Save settings
saveBtn.addEventListener('click', async () => {
    const color = colorSelect.value;
    await storage.set('color', color);

    // Update status
    status.textContent = 'Options saved.';
    setTimeout(() => {
        status.textContent = '';
    }, 750);
});
