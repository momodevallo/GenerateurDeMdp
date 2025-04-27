// script.js

const generateBtn = document.getElementById('generateBtn');
const passwordField = document.getElementById('password');
const strengthField = document.getElementById('strength');
const copyBtn = document.getElementById('copyBtn');
const lengthInput = document.getElementById('length');

// Fonction pour générer un mot de passe
function generatePassword(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

// Fonction pour vérifier la force du mot de passe
function checkPasswordStrength(password) {
    const lengthCriteria = password.length >= 8;
    const lowercaseCriteria = /[a-z]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCriteria && lowercaseCriteria && uppercaseCriteria && numberCriteria && specialCharCriteria) {
        return "Fort";
    } else if (lengthCriteria && (lowercaseCriteria || uppercaseCriteria) && numberCriteria) {
        return "Moyenne";
    } else {
        return "Faible";
    }
}

// Fonction pour copier le mot de passe dans le presse-papier
function copyPasswordToClipboard() {
    const text = passwordField.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Mot de passe copié !");
    });
}

// Gestion du clic sur le bouton générer
generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthInput.value) || 12;  // Valeur par défaut = 12
    const generatedPassword = generatePassword(length);
    const passwordStrength = checkPasswordStrength(generatedPassword);

    passwordField.textContent = generatedPassword;
    strengthField.textContent = `Force du mot de passe : ${passwordStrength}`;
});

// Gestion du clic sur le bouton copier
copyBtn.addEventListener('click', copyPasswordToClipboard);
