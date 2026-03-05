// Zufällige Texte in Karten anzeigen und rotieren
const ideenPause = [
    "Stehen Sie kurz auf und strecken Sie sich für 30 Sekunden.",
    "Was bringt Ihnen gerade jetzt Freude?",
    "Welches Buch/welcher Film/welches Lied würde Sie jetzt entspannen?",
    "Welche 3 Dinge können Sie gerade sehen, hören und fühlen?",
    "Trinken Sie ein Glas Wasser und atmen Sie 3-mal tief ein und aus.",
    "Schauen Sie für einen Moment aus dem Fenster und entspannen Sie Ihre Augen.",
    "Was ist die lustigste Erinnerung, die ich diese Woche hatte?",
    "Wohin geht ihr nächster Urlaub?",
    "Wenn Sie jetzt an einem anderen Ort wären, wo wäre das und was würden Sie dort tun?"
]; // https://serenityyogawellness.com/blog/what-you-really-should-know-about-mid-day-work-breaks#:~:text=Keep%20Your%20Breaks%20Positive%20and,bring%20me%20joy%20right%20now?

// Source - https://stackoverflow.com/a/18650169
// Posted by deadrunk, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0
const auswahlIdeen = ideenPause.sort(() => .5 - Math.random()).slice(0, 3); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// https://developer.mozilla.org/de/docs/Web/API/Document/querySelectorAll
const ausgewaehlteIdeen = document.querySelectorAll(".card");
ausgewaehlteIdeen.forEach((karte, index) => { // für jede Karte den passenden zufälligen Text setzen
    karte.textContent = auswahlIdeen[index];
    karte.addEventListener('mousedown', function(e) { e.preventDefault(); }); // verhindert dass Button Fokus verliert https://css-tricks.com/the-focus-visible-trick/ 
    karte.onclick = () => karte.classList.toggle("card-gelesen"); // https://developer.mozilla.org/de/docs/Web/API/Element/click_event https://developer.mozilla.org/de/docs/Web/API/DOMTokenList/toggle
});