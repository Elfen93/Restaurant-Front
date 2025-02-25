import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),
    new Route("/lacarte", "La Carte", "/pages/lacarte.html"),
    new Route("/signin", "Connexion", "/pages/signin.html", "js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/signup.html", "js/auth/signup.js"),
    new Route("/account", "Mon Compte", "/pages/account.html"),
    new Route("/editpassword", "Modifier Mes Informations", "/pages/editpassword.html"),
    new Route("/allResa", "Mes Réservations", "/pages/Reservations/allResa.html"),
    new Route("/reserver", "Réserver", "/pages/Reservations/reserver.html"),
];

    //Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
