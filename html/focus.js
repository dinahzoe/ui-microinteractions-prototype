// Zufällige Texte in Karten anzeigen und rotieren
const ideenStruktur = [
    "Stehen Sie kurz auf und strecken Sie sich für 30 Sekunden.",
    "Räumen Sie bei Bedarf den Schreibtisch auf.",
    "Löschen Sie 5-10 E-Mails oder organisieren Sie einen Ordner.",
    "Schließen Sie alle Tabs, die Sie gerade nicht brauchen, und behalten Sie nur 3–5 offen.",
    "Trinken Sie ein Glas Wasser und atmen Sie 3-mal tief ein und aus.",
    "Schauen Sie für einen Moment aus dem Fenster und entspannen Sie Ihre Augen.",
    "Wählen Sie eine einzige Aufgabe und arbeiten Sie 10-30 Minuten nur daran. Stellen Sie sich gerne einen Timer hierzu.",
    "Das Wichtigste ist manchmal, den Schreibtisch zu verlassen.",
    "Schreiben Sie kurz auf, was Ihr nächster konkreter Schritt ist, und beginnen Sie sofort damit."
]; // https://serenityyogawellness.com/blog/what-you-really-should-know-about-mid-day-work-breaks#:~:text=Keep%20Your%20Breaks%20Positive%20and,bring%20me%20joy%20right%20now?

// Source - https://stackoverflow.com/a/18650169
// Posted by deadrunk, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0
const auswahlIdeen = ideenStruktur.sort(() => .5 - Math.random()).slice(0, 3); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// https://developer.mozilla.org/de/docs/Web/API/Document/querySelectorAll
const ausgewaehlteIdeen = document.querySelectorAll(".card");
ausgewaehlteIdeen.forEach((karte, index) => {
    karte.textContent = auswahlIdeen[index];
    karte.addEventListener('mousedown', function (e) { e.preventDefault(); }); // verhindert dass Button Fokus verliert https://css-tricks.com/the-focus-visible-trick/ 
    karte.onclick = () => karte.classList.toggle("card-gelesen"); // https://developer.mozilla.org/de/docs/Web/API/Element/click_event https://developer.mozilla.org/de/docs/Web/API/DOMTokenList/toggle
});
