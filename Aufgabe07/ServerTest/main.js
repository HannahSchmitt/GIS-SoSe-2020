"use strict";
document.addEventListener("DOMContentLoaded", init);
function init() {
    communicate("http://127.0.0.1:5500/Aufgabe07/ServerTest/Data.json");
}
async function communicate(_url) {
    console.log("Start");
    let response = await fetch(_url);
    console.log("Response", response);
    let responseText = await response.json();
    console.log(responseText);
    console.log("End");
}
//# sourceMappingURL=main.js.map