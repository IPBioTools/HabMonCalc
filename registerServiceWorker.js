if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./serviceWorker.js')
            .then(r => console.log('Service Worker registered with scope: ', r.scope))
            .catch(e => console.log('Service Worker failed to register: ', e))
    })
}