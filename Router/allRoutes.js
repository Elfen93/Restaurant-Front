import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/lacarte", "La Carte", "/pages/lacarte.html", []),
    new Route("/signin", "Connexion", "/pages/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/account.html", ["client"], "/js/auth/signup.js"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/editPassword.html", ["client"], "/js/auth/editPassword.js"),
    new Route("/allResa", "Mes réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
];



    //Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
