import { useState, useEffect } from 'react';

export default function useSessionStorage(key, initialValue) {
    // Lese den gespeicherten Wert aus sessionStorage
    const savedValue = sessionStorage.getItem(key);

    const [value, setValue] = useState(() => {
        // Wenn der gespeicherte Wert existiert, benutze ihn, andernfalls setze den initialValue
        if (savedValue) {
            try {
                return JSON.parse(savedValue);  // Den Wert als JSON parsen, falls er als JSON gespeichert wurde
            } catch (error) {
                console.error(`Fehler beim Parsen des Wertes von ${key}:`, error);
                return initialValue;  // Rückfallwert
            }
        } else {
            return initialValue;  // Wenn kein Wert in sessionStorage vorhanden ist, verwende den initialen Wert
        }
    });

    // Wenn sich der Wert ändert, speichere ihn in sessionStorage
    useEffect(() => {
        if (value !== undefined) {
            try {
                sessionStorage.setItem(key, JSON.stringify(value));  // Speichern als JSON
            } catch (error) {
                console.error('Fehler beim Speichern in sessionStorage:', error);
            }
        }
    }, [value, key]);

    return [value, setValue];
}
