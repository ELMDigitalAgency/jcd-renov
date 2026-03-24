<?php
header('Content-Type: application/json');

// Définir l'encodage UTF-8
mb_internal_encoding("UTF-8");

// Fonction pour nettoyer les entrées du formulaire
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = sanitizeInput($_POST['nom']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $telephone = sanitizeInput($_POST['telephone']);
    $service = sanitizeInput($_POST['services']);
    $budget = sanitizeInput($_POST['budget']);
    $message = sanitizeInput($_POST['message']);

    // Validation de l'email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Adresse email invalide. Veuillez entrer un email correct.']);
        exit;
    }

    // Validation du numéro de téléphone (doit contenir exactement 10 chiffres)
    if (!preg_match('/^\d{10}$/', $telephone)) {
        echo json_encode(['success' => false, 'message' => 'Numéro de téléphone invalide. Assurez-vous d\'entrer un numéro à 10 chiffres.']);
        exit;
    }

    // Préparation des en-têtes de l'email avec encodage UTF-8
    $to = 'contact@jcd-renovation.com';
    $subject = 'Demande de devis depuis le site';
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "MIME-Version: 1.0\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Message de l'email
    $mailMessage = "Nom: $nom\n" .
                   "Email: $email\n" .
                   "Téléphone: $telephone\n" .
                   "Service souhaité: $service\n" .
                   "Budget estimé: $budget €\n" .
                   "Détails du projet: $message";

    // Envoi de l'email
    if (mail($to, $subject, $mailMessage, $headers)) {
        echo json_encode([
            'success' => true,
            'message' => 'Merci ! Votre demande de devis a été envoyée avec succès. Nous vous contacterons sous 24 heures.'
        ]);
    } else {
        // Loguer l'erreur si l'envoi échoue
        error_log("Erreur d'envoi d'email pour le devis de $email à $to");
        echo json_encode([
            'success' => false,
            'message' => 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard ou nous contacter directement.'
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Requête non autorisée. Veuillez soumettre le formulaire.'
    ]);
}
?>
