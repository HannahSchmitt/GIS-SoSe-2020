"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11 = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var A11;
(function (A11) {
    let kontaktliste;
    //Port wird als Variable typ number gespeichert
    let port = process.env.PORT;
    //Wenn keinen Port -> dann wird er auf 8100 gesetzt
    if (port == undefined)
        port = 8100;
    let databaseUrl = "mongodb://localhost:27019";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        //Server wird als Variable typ Http.Server gespeichert.
        let server = Http.createServer();
        console.log("server starting, port:" + _port);
        //Handler wird dem Server als Listener hinzugefügt.
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        //Server hört Port ab.
        server.listen(_port);
        //startet den Server
        _port = Number(process.env.PORT);
    }
    async function connectToDatabase(_url) {
        console.log("Hallo");
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        kontaktliste = mongoClient.db("Test").collection("Students");
        console.log("Datenbank Verbindung", kontaktliste != undefined);
    }
    //Konsole gibt beim Aufruf "Listening" aus
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        //Konsole gibt beim Aufruf "Whats up?"aus
        console.log("What's up?");
        //Diese Parameter werden für die Response festgelegt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe auf der Seite als HTML
        if (_request.url) {
            let q = url.parse(_request.url, true);
            let path = q.pathname;
            if (path == "/send") {
                await handleSend(q);
            }
            else if (path == "/get") {
                await handleGet(_response);
            }
        }
        //response abschließen
        _response.end();
    }
    async function handleSend(_q) {
        console.log("Übermittle die Daten an Mongo");
        console.log(_q.query);
        kontaktliste.insertOne(_q.query);
    }
    async function handleGet(_response) {
        let kontaktArray = await kontaktliste.find().toArray();
        _response.write(JSON.stringify(kontaktArray));
    }
})(A11 = exports.A11 || (exports.A11 = {}));
//# sourceMappingURL=Server.js.map