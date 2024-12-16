// Sélection du formulaire
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi par défaut

    // Récupération des valeurs des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Vérification des champs
    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Affichage d'un message de confirmation
    alert(`Merci ${name}, votre message a bien été envoyé !`);

    // Réinitialisation du formulaire
    document.querySelector('form').reset();
});