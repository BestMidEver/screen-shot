import captureWebsite from 'capture-website';

await captureWebsite.file('https://app.purple.is/?e=painttube', `snaps/screenshot_${Date.now()}.png`);