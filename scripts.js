/* scripts.js */

// Beispiel: Gesamtstundenzahl berechnen
document.addEventListener('DOMContentLoaded', () => {
    const durationInputs = document.querySelectorAll('.duration');
    const totalHoursElement = document.getElementById('totalHours');

    function calculateTotal() {
        let total = 0;
        durationInputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            total += value;
        });
        totalHoursElement.textContent = total.toFixed(2) + ' Stunden';
    }

    durationInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    calculateTotal();
});
