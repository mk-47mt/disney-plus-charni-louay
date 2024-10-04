// Sélectionne tous les éléments avec la classe 'dropdown'
const dropdowns = document.querySelectorAll(".dropdown");

// Sélectionne tous les boutons avec la classe 'bloc-top'
const btnsDrop = document.querySelectorAll(".bloc-top");

// Parcourt chaque bouton pour ajouter un gestionnaire d'événement
btnsDrop.forEach((btn, index) => {
    let toggleIndex = 0; // Initialise un compteur pour suivre l'état du dropdown

    // Ajoute un gestionnaire d'événement au clic sur chaque bouton
    btn.addEventListener('click', () => {
        const dropdown = dropdowns[index]; // Sélectionne le dropdown correspondant au bouton cliqué

        // Affiche la hauteur du dropdown (utile pour l'animation)
        // console.log(dropdown.scrollHeight);

        // Vérifie l'état actuel du toggle
        if (toggleIndex === 0) {
            // Si le dropdown est fermé, ajuste sa hauteur à sa hauteur scrollHeight pour l'afficher
            dropdown.style.height = `${dropdown.scrollHeight}px`;
            toggleIndex++; // Met à jour l'index pour indiquer que le dropdown est maintenant ouvert
        } else {
            // Si le dropdown est ouvert, réinitialise sa hauteur à 0 pour le cacher
            dropdown.style.height = `${btn.scrollHeight}px`;
            toggleIndex--; // Met à jour l'index pour indiquer que le dropdown est maintenant fermé
        }
    });
});
