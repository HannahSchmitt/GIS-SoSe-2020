"use strict";
var artikel;
(function (artikel) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let articleJson = localStorage.getItem(key);
            let item = JSON.parse(articleJson);
            gesamtPreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }
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
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2);
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(artikel || (artikel = {}));
//# sourceMappingURL=ScriptWarenkorb.js.map