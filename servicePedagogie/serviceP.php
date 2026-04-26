<?php
$pdo = new PDO("mysql:host=localhost;dbname=ton_db;charset=utf8", "root", "");
$encadrants = $pdo->query("SELECT id, nom FROM enseignants")->fetchAll(PDO::FETCH_ASSOC);

$planning = [];
$jour = date('d/m/Y');
$salle = "Salle A";
$start = new DateTime("08:00");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['encadrant_id'])) {
    $id = $_POST['encadrant_id'];
    $stmt = $pdo->prepare("
        SELECT b.titre_memoire, g.*, 
               e1.nom AS jury1_nom, e2.nom AS jury2_nom, e3.nom AS jury3_nom, e4.nom AS examinateur_nom
        FROM binomes b
        JOIN groupes_jurys g ON b.id = g.id_binome
        JOIN enseignants e1 ON g.jury1 = e1.id
        JOIN enseignants e2 ON g.jury2 = e2.id
        JOIN enseignants e3 ON g.jury3 = e3.id
        JOIN enseignants e4 ON g.examinateur = e4.id
        WHERE b.id_encadrant = ?
    ");
    $stmt->execute([$id]);
    $planning = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>