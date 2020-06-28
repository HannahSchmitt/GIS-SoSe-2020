"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09 = void 0;
const Http = require("http");
const Url = require("url");
var A09;
(function (A09) {
    console.log("Server wird gestartet");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
            else if (path == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(A09 = exports.A09 || (exports.A09 = {}));
//# sourceMappingURL=Server.js.map