"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let anmelden = document.getElementById("button");
    anmelden.addEventListener("click", communicate);
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-example.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=Skript.js.map