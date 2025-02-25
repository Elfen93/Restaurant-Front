document.addEventListener("DOMContentLoaded", function () {
    // Crear el contenedor del loader
    const loaderContainer = document.createElement("div");
    loaderContainer.id = "loader-container";
    document.body.prepend(loaderContainer);

    // Crear el loader
    const loader = document.createElement("div");
    loader.id = "loader-animation";
    loaderContainer.appendChild(loader);

    // Crear el texto debajo del loader
    const loaderText = document.createElement("div");
    loaderText.id = "loader-text";
    loaderText.textContent = "Un instant...";
    loaderContainer.appendChild(loaderText);

    // Ejecutar la función principal
    showAndHideElementsForRoles();

    // Ocultar el loader después de que la página esté completamente cargada
    window.addEventListener("load", () => {
      loaderContainer.style.opacity = "0";
      setTimeout(() => {
        loaderContainer.remove();
      }, 500); // Coincide con la duración de la transición
    });
  });

const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");


signoutBtn.addEventListener("click", signout);

function getRole(){
    return getCookie(RoleCookieName);
}

function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}

function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function isconnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else{
        return true;
    }
}

function showAndHideElementsForRoles(){
    const userConnected = isconnected()
    const role = getRole();

    let allElementstoEdit = document.querySelectorAll('[data-show]');

    allElementstoEdit.forEach(element =>{
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                break;
            case 'client':
                if(!userConnected || role != "client"){
                    element.classList.add("d-none");
                }
                break;

        }
    })
}
