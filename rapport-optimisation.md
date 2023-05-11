# Rapport d'optimisation du projet ScrollyTelling 
[Page Speed Insights - Rapport du 11 mai 2023, 14:03:01](https://pagespeed.web.dev/analysis/https-alexdan26-github-io-daniel-alexandre-scrollytelling/rwfsobwkqb?form_factor=desktop)

## Problème 1
### Charges utiles de réseau trop grandes
L'image de fond "enfer.png" est trop grosse.
### Actions concrètes pour résoudre le problème
Il va falloir compresser l'image avec une action Photoshop (Petit programme sur Photoshop pour des actions spécifiques) pour qu'elle prenne moins d'espace.

## Problème 2
### Fichiers aux formats désuets
Les fichiers jpg et png n'ont pas la même compression.
### Actions concrètes pour résoudre le problème
Il faudrait convertir le type du fichier en de ".png" à ".webp". Ce dernier peut tolérer la crompression d'une image plus aisément que les autres types de fichiers d'image.

## Problème 3
### Un fichier est manquant
L'image de fond "ciel.jpg" a été supprimé durant la conception du projet. C'était l'image d'arrière-plan de la section d'intro.
### Actions concrètes pour résoudre le problème
Il y a un autre fichier dans les dossiers "img" qui se nomme "ciel.png" (pas ".jpg" donc). Je vais corriger la ligne de code pour qu'elle me trouve le le fichier ".png" à la place.
