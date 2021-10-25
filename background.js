chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.type === 'close_tab') {
        chrome.tabs.remove(sender.tab.id);
    }
});
