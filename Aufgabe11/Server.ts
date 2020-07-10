import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace A11 {
    interface Kontakte {
        [type: string]: string[] | undefined;
    }

    let kontaktliste: Mongo.Collection;
    //Port wird als Variable typ number gespeichert
    let port: number | string | undefined = process.env.PORT;
    //Wenn keinen Port -> dann wird er auf 8100 gesetzt
    if (port == undefined)
        port = 8100;

    let databaseUrl: string = "mongodb://localhost:27019";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        //Server wird als Variable typ Http.Server gespeichert.
        let server: Http.Server = Http.createServer();
        console.log("server starting, port:" + _port);
        //Handler wird dem Server als Listener hinzugefügt.
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        //Server hört Port ab.
        server.listen(_port);
        //startet den Server
        _port = Number(process.env.PORT);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        console.log("Hallo");
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        kontaktliste = mongoClient.db("Test").collection("Students");
        console.log("Datenbank Verbindung", kontaktliste != undefined);
    }

    //Konsole gibt beim Aufruf "Listening" aus
    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        //Konsole gibt beim Aufruf "Whats up?"aus
        console.log("What's up?");

        //Diese Parameter werden für die Response festgelegt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        //Ausgabe auf der Seite als HTML
        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
            let path: string = <string>q.pathname;
            if (path == "/send") {
             await handleSend(q);

            } else if (path == "/get") {
              await handleGet(_response);
            }
        }
        //response abschließen
        _response.end();
    }
    
    async function handleSend(_q: url.UrlWithParsedQuery): Promise<void> {
        console.log("Übermittle die Daten an Mongo");
        console.log(_q.query);
        kontaktliste.insertOne(_q.query);
    }
    async function handleGet(_response: Http.ServerResponse): Promise<void> {
        let kontaktArray: Kontakte[] = await kontaktliste.find().toArray();
        _response.write(JSON.stringify(kontaktArray));
    }
}