"use strict";
var Eismanufaktur;
(function (Eismanufaktur) {
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    let sendData = document.getElementById("send");
    sendData.addEventListener("click", sendButtonfunction);
    window.addEventListener("load", init);
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        update();
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        let gesamtPreisDiv = document.getElementById("countPrice");
        let gesamtPreisText = document.createElement("p");
        gesamtPreisDiv.appendChild(gesamtPreisText).innerHTML = "gesamtPreis: " + gesamtPreis.toFixed(2) + "€";
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let articleJson = localStorage.getItem(key);
            // tslint:disable-next-line: no-any
            let item = JSON.parse(articleJson);
            gesamtPreis += item.preis;
            createDynamicContent(item);
            console.log(gesamtPreis);
        }
        setGesamtpreis();
    }
    let formData;
    async function sendButtonfunction() {
        console.log("Hallöle");
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/send";
        let url = "https://aufgabe8gis.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
    // tslint:disable-next-line: no-any
    function createDynamicContent(_inputArticle) {
        //Div erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);
        //IMG IN DIV PACKEN
        let imgElement = document.createElement("img");
        newDiv.appendChild(imgElement);
        imgElement.src = _inputArticle.img;
        console.log(imgElement);
        //NAME
        let name = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + " € ";
    }
})(Eismanufaktur || (Eismanufaktur = {}));
//# sourceMappingURL=Warenkorb.js.map