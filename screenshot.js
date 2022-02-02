import captureWebsite from 'capture-website';

await captureWebsite.file('https://app.purple.is/?e=painttube', `screenshot_${Date.now()}.png`);