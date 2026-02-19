// https://developer.chrome.com/docs/extensions/reference/api/alarms?hl=de
// Alarm festlegen
chrome.runtime.onInstalled.addListener(() => {
    // Create an alarm so we have something to look at in the demo
    chrome.alarms.create('alarm', { // Timer stellen
        delayInMinutes: 0.1,
        periodInMinutes: 1 // Widerholte Meldungen
    });
});


// https://developer.chrome.com/docs/extensions/reference/api/tabs?hl=de
async function countTabs() { // async/await wichtig, da chrome.tabs.query asynchron arbeitet und erst später Daten zurückgibt
    const tabs = await chrome.tabs.query({}); // holt alle offenen Tabs im Browser und gibt eine js Liste zurück
    return tabs.length;
}


// https://developer.chrome.com/docs/extensions/develop/ui/notify-users?hl=de
// https://developer.chrome.com/docs/extensions/reference/api/notifications?hl=de#type-NotificationOptions
// json code notifications, nutzt genau diese api von dort, um nachricht zu erzeugen 
chrome.alarms.onAlarm.addListener(async () => { // onAlarm, wenn Timer klingelt < Code ausführen

    const showAmountofTabs = await countTabs();

    if (showAmountofTabs > 10) {

        chrome.notifications.create({
            type: 'basic', // Pflicht für Notifications
            iconUrl: chrome.runtime.getURL('image/icon_structure.png'), // Wichtig, da Notification sonst oft nicht erscheint < wichtig für Chrome
            title: 'Zeit für eine Pause',
            message: `Du hast gerade ${showAmountofTabs} Tabs offen, Zeit für Struktur!`,
            buttons: [{ title: 'Hier klicken für deine Pause' }]
        });
    }
    else {

        chrome.notifications.create({
            type: 'basic',
            iconUrl: chrome.runtime.getURL('image/icon_reset.png'),
            title: 'Zeit für eine Pause',
            message: "Nimm dir Zeit für eine kurze Pause oder Konzentrationsübungen!",
            buttons: [{ title: 'Hier klicken für deine Pause' }]
        });
    }
});


// index öffnen
// https://developer.chrome.com/docs/extensions/reference/api/notifications?hl=de#event-onButtonClicked
// https://developer.chrome.com/docs/extensions/reference/api/windows?hl=de#create
chrome.notifications.onButtonClicked.addListener(() => { // Der Nutzer hat in der Benachrichtigung auf eine Schaltfläche gedrückt.
    chrome.windows.create({ // Erstellt (öffnet) ein neues Browserfenster
        url: "html/index.html",
    })
});


// json: https://developer.mozilla.org/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background https://developer.chrome.com/docs/extensions/reference/manifest?hl=de"

// Die Benachrichtigung wurde durch eine Nutzeraktion geschlossen
//chrome.notifications.onClosed.addListener(() => {
//  chrome.notifications.clear("Take A Break");
//});

