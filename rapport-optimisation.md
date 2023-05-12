# Rapport d'optimisation du projet ScrollyTelling 
[Page Speed Insights - Rapport du 11 mai 2023, 14:03:01](https://pagespeed.web.dev/analysis/https-alexdan26-github-io-daniel-alexandre-scrollytelling/rwfsobwkqb?form_factor=desktop)

## Problème 1
### Charges utiles de réseau trop grandes
L'image de fond "enfer.png" est trop volumineuse.
### Actions concrètes pour résoudre le problème
Il va falloir compresser l'image avec une action Photoshop (petite option programmable sur Photoshop pour effectuer des actions spécifiques) pour qu'elle prenne moins d'espace.
### Résultat 
En compressant l'image d'arrière-plan, j'ai économisé du temps de chargement. Pour cela, j'ai réduit les dimensions de l'image sur Photoshop pour qu'elle ait une largeur de 1920 pixels.

## Problème 2
### Le LCP n'est pas optimisé
Le Largest Contentful Paint est l'élément le plus gros du viewport, et donc, celui le plus difficile à faire un rendu. Cela ralenti l'affichage de la page.
### Actions concrètes pour résoudre le problème
Il existe de nombreux outils pour rendre le LCP plus potable, mais, en premier, il faut voir le délai de chargement de cet élément. Une fois trouvé, on peut le réparer.
### Résultat 
Malheureuseuemnt, je n'ai pas été capable de résoudre ce problème. C'est en dehors de mes compétences; je n'ai jamais appris l'existence de cette notion durant ma formation.

## Problème 3
### Un fichier est manquant
L'image de fond "ciel.jpg" a introuvable. Généralement, cette image est derrière mon "header".
### Actions concrètes pour résoudre le problème
Il y a un autre fichier dans les dossiers "img" qui se nomme "ciel.png" (pas ".jpg" donc). Je vais corriger la ligne de code pour qu'elle me trouve le fichier ".png" à la place.
### Résultat 
Ce n'était qu'un simple problème technique, mais il nuisait au bon fonctionnement du site Web. J'ai donc modifié l'extensions du fichier dans la ligne de code CSS qui gérait l'arrière-plan de l'"header".

## Rapport Projet ScrollyTelling après optimisation
[Page Speed Insights - Rapport du 11 mai 2023, 20:45:58](https://pagespeed.web.dev/analysis/https-alexdan26-github-io-daniel-alexandre-scrollytelling/l57u07669q?form_factor=desktop)
