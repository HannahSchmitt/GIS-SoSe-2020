"use strict";
var L09_Formular;
(function (L09_Formular) {
    let buttonJson = document.getElementById("buttonJson");
    buttonJson.addEventListener("click", handleClickJson);
    let buttonHtml = document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", handleClickHtml);
    async function handleClickHtml(_event) {
        let formData = new FormData(document.forms[0]);
        let urlServer = "https://aufgabe8gis.herokuapp.com";
        urlServer = urlServer + "/html";
        let query = new URLSearchParams(formData);
        urlServer += "?" + query.toString();
        let response = await fetch(urlServer);
        let rückgabeText = await response.text();
        let serverResponse = document.getElementById("serverRückgabe");
        serverResponse.innerHTML = rückgabeText;
    }
    async function handleClickJson() {
        let formData = new FormData(document.forms[0]);
        let urlServer = "https://aufgabe8gis.herokuapp.com";
        urlServer = urlServer + "/json";
        let query = new URLSearchParams(formData);
        urlServer += "?" + query.toString();
        let response = await fetch(urlServer);
        let rückgabeText = await response.json();
        console.log(rückgabeText);
    }
})(L09_Formular || (L09_Formular = {}));
//# sourceMappingURL=Formular.js.map