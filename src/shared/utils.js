export const storage = {
    get: (key) => new Promise((resolve) => {
        chrome.storage.sync.get([key], (result) => {
            resolve(result[key]);
        });
    }),
    set: (key, value) => new Promise((resolve) => {
        chrome.storage.sync.set({ [key]: value }, () => {
            resolve();
        });
    }),
};
