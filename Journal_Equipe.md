# Journal du projet
10/01/2022
 - Idée du projet trouvée : ce sera une extension pour corriger la grammaire / orthographe / proposer des synonymes ... en français
 - APIs trouvées : on a 3 APIs qui proposent toutes des fonctionnalités intéressantes pour le projet 
 - On a pris la décision de développer l'extension avec REACT --> atelier mis en place pour se familiariser un peu avec la technologie 

11/01/2022
 - On a réussi à faire un manifest qui fonctionne sur Chrome Extension 
 - On essaye de call des APIs sur REACT mais pour le moment impossible d'y arriver

12/01/2022
 - On a trouvé l'API qui fonctionne
 - On va essayer Axios pour l'appeler, il reste à l'adapter à notre projet 

13/01/2022
 - On pensait que l'API ne fonctionnait pas donc on a réorganisé notre code avec plusieurs components 
 - Après des heures de recherche sur le code JS, c'est finalement le form du HTML qui faisait tout buguer 
 - Tout fonctionnait depuis le début ! 

17/01/2022
 - On a réussi à stocker le userInput dans une variable et l'utiliser dans l'URL de l'API pour corriger le texte écrit par l'utilisateur
 - On a essayé d'afficher les données renvoyées par l'API dans le HTML --> réussi avec une méthode JS (append) mais peut-être voir plutôt une méthode REACT
 - Le résultat de la correction renvoyé par l'API s'affiche deux fois sur la page HTML --> à régler 
 
 18/01/2022
 -on a réussi a se débloquer et notre extension fonctionne
 - on a rendu notre extension plus jolie avec du CSS
