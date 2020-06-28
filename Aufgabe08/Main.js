"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
//Um einen Server zu bauen, benötigt man das Modul http
//Der Asterisk * gibt an, dass sämtliche Funktionalitäten importiert werden sollen.
const Http = require("http");
//import * as Url from "url";
var A08Server;
(function (A08Server) {
    console.log("Starting server"); //Server wird gestartet und in der Konsole ausgegeben
    let port = Number(process.env.PORT); //Port erstellen
    if (!port) //Wenn der Port nicht gefunden wird oder nicht vorhanden ist...
        port = 8100; //...dann setze ihn auf den Wert 8100
    //Variable "Server" wird erstellt
    let server = Http.createServer(); //server (Typ http server) wird neuer http server zugewiesen 
    server.addListener("request", handleRequest); //handleRequest wird ausgeführt, wenn eine neue Anfrage über den Post aufkommt
    server.addListener("listening", handleListen); //handleListen wird ausgeführt, wenn der Server komplett neu gestartet wird
    server.listen(port); //Server hört auf Port, wenn dieser Netzzugang bekommt
    function handleListen() {
        console.log("Listening"); //wird nur einmal ausgegeben beim öffnen der Seite
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //bestimmt einen einzigen Headerwert
        _response.setHeader("Access-Control-Allow-Origin", "*"); //bestimmt ebenfalls einen Headerwert
        _response.write(_request.url); //Daten/Url werden auf der Serverwebseite angezeigt
        console.log(_request.url); //Teilaufgabe, die request.url wird in der Serverkonsole ausgegeben
        _response.end(); //Beendet die Rückgabe und soll die Nachricht als komplett verstehen
        //Diese Methode signalisiert dem Server, dass alle Antwortkopfzeilen und -körper gesendet wurden;
        //dieser Server sollte diese Nachricht als vollständig betrachten. Die Methode, response.end(), MUSS bei jeder Antwort aufgerufen werden!
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=Main.js.map