"use strict";
var Eismanufaktur;
(function (Eismanufaktur) {
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    let warenkorbLoeschen;
    let sendData = document.getElementById("send");
    sendData.addEventListener("click", sendButtonfunction);
    window.addEventListener("load", init);
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        warenkorbLoeschen = document.querySelector("#gesamtLoeschen");
        warenkorbLoeschen.addEventListener("click", handleRemoveAll);
        update();
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        let gesamtPreisDiv = document.getElementById("countPrice");
        let gesamtPreisText = document.createElement("p");
        gesamtPreisDiv.appendChild(gesamtPreisText).innerHTML = "gesamtPreis: " + gesamtPreis.toFixed(2) + "€";
        console.log(localStorage);
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
    }
    let formData;
    async function sendButtonfunction() {
        console.log("Hallöle");
        formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100/send";
        //let url: string = "https://aufgabe8gis.herokuapp.com/send";
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
        imgElement.src = _inputArticle.img;
        newDiv.appendChild(imgElement);
        console.log(imgElement);
        //NAME
        let name = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        //BUTTON
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    // tslint:disable-next-line: no-any
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    /*function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + " € ";
    }*/
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Eismanufaktur || (Eismanufaktur = {}));
//# sourceMappingURL=Warenkorb.js.map