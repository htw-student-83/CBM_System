export const inputcheck = (str) => {
    const trimmedStr = str.trim(); // Leerzeichen entfernen
    // Prüft, ob die Eingabe nur aus Zahlen besteht, gefolgt von einem Punkt oder Komma und genau zwei Dezimalstellen
    const regex = /^\d+([,]\d{2})$/;
    return regex.test(trimmedStr);
}

