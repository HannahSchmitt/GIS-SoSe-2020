"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eismanufaktur = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Eismanufaktur;
(function (Eismanufaktur) {
    let kontaktliste;
    let receivedData;
    //Port wird als Variable typ number gespeichert
    let port = process.env.PORT;
    //Wenn keinen Port -> dann wird er auf 8100 gesetzt
    if (port == undefined)
        port = 8100;
    let databaseUrl = "mongodb://localhost:27020";
    //let databaseUrl: string = "mongodb+srv://Administrator:Administrator@hannahnaha.dtfe1.mongodb.net/Test?retryWrites=true&w=majority";
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
        //Diese Parameter werden für die Response festgelegt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe auf der Seite als HTML
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/send") {
                console.log("Übermittle die Daten an Mongo");
                console.log(url.query);
                kontaktliste.insertOne(url.query);
            }
            else if (path == "/get") {
                await receivedDatas(_response);
            }
        }
        //response abschließen
        _response.end();
    }
    async function receivedDatas(_response) {
        console.log("Test456");
        //tslint:disable-next-line: no-any
        receivedData = await kontaktliste.find().toArray();
        for (let index = 0; index <= receivedData.length; index++) {
            if (receivedData[index]) {
                let current = receivedData[index];
                for (let key in current) {
                    _response.write(key + ": " + JSON.stringify(current[key]) + "<br>");
                }
                _response.write("<br>");
            }
        }
    }
})(Eismanufaktur = exports.Eismanufaktur || (exports.Eismanufaktur = {}));
//# sourceMappingURL=Server.js.map