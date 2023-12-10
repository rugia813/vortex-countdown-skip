console.log('Vortex Countdown Skip loaded')
window.onload = () => {
    console.log('on load');
    window.location = document.getElementById('slowDownloadButton').getAttribute('data-download-url');
    setTimeout(() => {
        window.close();
    }, 100);
}