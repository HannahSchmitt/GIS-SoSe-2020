import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Eismanufaktur {
    interface Orders {
        [type: string]: string[] | undefined;
    }
    let kontaktliste: Mongo.Collection;
    let receivedData: Orders[];
    //Port wird als Variable typ number gespeichert
    let port: number | string | undefined = process.env.PORT;
    //Wenn keinen Port -> dann wird er auf 8100 gesetzt
    if (port == undefined)
        port = 8100;

    //let databaseUrl: string = "mongodb://localhost:27020";
    let databaseUrl: string = "mongodb+srv://Administrator:Administrator@hannahnaha.dtfe1.mongodb.net/Test?retryWrites=true&w=majority";

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
        //Diese Parameter werden für die Response festgelegt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        //Ausgabe auf der Seite als HTML
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = <string>url.pathname;
            if (path == "/deleteData") {
                kontaktliste.drop();
                }
            if (path == "/send") {
                console.log("Übermittle die Daten an Mongo");
                console.log(url.query);
                kontaktliste.insertOne(url.query);

            } else if (path == "/get") {
                await receivedDatas(_response);
            }
        }

        //response abschließen
        _response.end();
    }

    async function receivedDatas(_response: Http.ServerResponse): Promise<void> {
        console.log("Test456");
        //tslint:disable-next-line: no-any

        receivedData = await kontaktliste.find().toArray();
        for (let index: number = 0; index <= receivedData.length; index++) {

            if (receivedData[index]) {

                let current: Orders = <Orders>receivedData[index];
                for (let key in current) {
                    _response.write(key + ": " + JSON.stringify(current[key]) + "<br>");
                }
                _response.write("<br>");
            }
        }
    }
}