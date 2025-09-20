function pad(n){return n<10?('0'+n):n}

function updateClock(){
    const el = document.getElementById('clock');
    if(!el) return;
    const now = new Date();
    const h = pad(now.getHours());
    const m = pad(now.getMinutes());
    const s = pad(now.getSeconds());
    el.textContent = `${h}:${m}:${s}`;
    el.setAttribute('aria-live', 'polite'); // Apply aria-live for accessibility
}

// Update once per second, aligned to the next second for accuracy
function startClock(){
    updateClock();
    const msToNext = 1000 - (Date.now() % 1000);
    setTimeout(function(){
        updateClock();
        setInterval(updateClock, 1000);
    }, msToNext);
}

startClock();
