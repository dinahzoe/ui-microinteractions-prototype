// https://developer.mozilla.org/de/docs/Web/API/Document/querySelector?utm.com
// https://developer.mozilla.org/de/docs/Web/API/Node/textContent?utm.com
// https://developer.mozilla.org/de/docs/Web/API/Element/classList?utm.com

// https://developer.chrome.com/docs/extensions/reference/api/tabs?hl=de#method-query
chrome.tabs.query({}, tabs => { // Alle offenen Browser-Tabs abfragen

    const heading = document.querySelector('.heading-personalize'); // Strukturklasse, um das Element per JS auszuwählen < .heading-personalized wird unten dynamisch hinzugefügt, um CSS-Stil anzuwenden < Struktur und Style getrennt halten, sonst würde man Stil immer anwenden auch wenn die Bedingung nicht stimmt

    if (tabs.length > 10) {
        heading.textContent =
            "Sie sind hier, um Struktur zu erhalten.\nDie hervorgehobene Karte empfiehlt sich, andere Optionen stehen Ihnen frei.";
        heading.classList.add('heading-personalized'); // neue Klasse für personalisierten Fall, in JS hinzufügen, da sie nur in CSS existiert, aber noch nicht im HTML
        document.querySelector('.card-focus').classList.add('card-highlight'); // in components.css neuer Style erstellt um Karte hervorzuheben, nur bei bestimmter Bedingung < gleiches Prinzip wie bei Text 
        document.querySelector('.subtitle').style.display = 'none';
    } else {
        heading.textContent =
            "Sie sind hier, um eine Pause zu nehmen.\nDie hervorgehobene Karte empfiehlt sich, andere Optionen stehen Ihnen frei.";
        heading.classList.add('heading-personalized');
        document.querySelector('.card-breath').classList.add('card-highlight');
        document.querySelector('.card-reset').classList.add('card-highlight');
        document.querySelector('.subtitle').style.display = 'none';
    }
});