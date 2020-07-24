"use strict";
var artikel;
(function (artikel_1) {
    let anzahlWare = 0;
    let countPreis = 0;
    let gesamtPreis;
    let pGesamtpreis;
    let divInhalt = document.createElement("div");
    let anzeigeArtikel = document.createElement("div");
    anzeigeArtikel.id = "anzeigeArtikel";
    let waffelButton = document.getElementById("waffelbtn");
    let eisButton = document.getElementById("eisbtn");
    let toppingButton = document.getElementById("toppingbtn");
    artikel_1.artikel = [];
    window.addEventListener("load", init);
    //Json Daten werden vom Server gezogen
    function init() {
        let url = "Data.json";
        communicate(url);
        divInhalt = document.getElementById("vorschauUpdate");
        pGesamtpreis = document.querySelector("#total");
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        vorschauUpdate();
        createButtons();
    }
    function createButtons() {
        waffelButton.addEventListener("click", handleCategoryClick.bind(waffelButton));
        eisButton.addEventListener("click", handleCategoryClick.bind(eisButton));
        toppingButton.addEventListener("click", handleCategoryClick.bind(toppingButton));
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        artikel_1.artikel = await response.json();
        console.log("End");
        createDynamicContent();
    }
    function vorschauUpdate() {
        divInhalt.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let artikeljson = localStorage.getItem(key);
            let item = JSON.parse(artikeljson);
            gesamtPreis += item.preis;
            showArtikel(item);
        }
    }
    function showArtikel(_categorys) {
        //DIV erstellen
        let newDiv = document.createElement("div");
        divInhalt.appendChild(newDiv);
        newDiv.id = _categorys.name;
        console.log(newDiv.id);
        //getImg from localStorage aufrufen
        let imgElement = document.createElement("img");
        imgElement.src = _categorys.img;
        newDiv.appendChild(imgElement);
        //get Beschreibung
        let name = document.createElement("p");
        name.innerHTML = _categorys.name;
        newDiv.appendChild(name);
    }
    function saveInLocalStorage(_inputArticle) {
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle.name;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
        vorschauUpdate();
    }
    //Produkte einschleifen
    function createDynamicContent() {
        for (let index = 0; index < artikel_1.artikel.length; index++) {
            //contentDiv erzeugen
            let contentDiv = document.createElement("div");
            contentDiv.setAttribute("class", "waffel");
            contentDiv.setAttribute("id", "artikel" + index);
            document.getElementById("waffel")?.appendChild(contentDiv);
            //Produktbild hinzufügen‹
            let contentImg = document.createElement("img");
            contentImg.setAttribute("src", artikel_1.artikel[index].img);
            contentImg.setAttribute("alt", "artikel");
            contentImg.setAttribute("class", "produktbild");
            document.getElementById("artikel" + index)?.appendChild(contentImg);
            //Produktbezeichnung hinzufügen
            let H3 = document.createElement("h3");
            H3.innerHTML = artikel_1.artikel[index].name;
            document.getElementById("artikel" + index)?.appendChild(H3);
            // preis hinzufügen
            let contentPreis = document.createElement("p");
            contentPreis.innerHTML = artikel_1.artikel[index].preis + "€";
            document.getElementById("artikel" + index)?.appendChild(contentPreis);
            switch (artikel_1.artikel[index].kategorie) {
                case "waffel":
                    let getContainerwaffel = document.getElementById("waffel");
                    getContainerwaffel.appendChild(contentDiv);
                    break;
                case "eis":
                    let getContainereis = document.getElementById("eis");
                    getContainereis.appendChild(contentDiv);
                    break;
                case "topping":
                    let getContainertopping = document.getElementById("topping");
                    getContainertopping.appendChild(contentDiv);
                    break;
                default:
                    break;
            }
            //Button verknüpfen/hinzufügen
            let newButton = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Löschen";
            vorschauUpdate();
            //"Button" in Warenkorb
            //add Button
            newButton.addEventListener("click", zaehler.bind(artikel_1.artikel[index]));
            newButton.setAttribute("preis", artikel_1.artikel[index].preis.toString());
            newButton.setAttribute("name", artikel_1.artikel[index].name);
            newButton.setAttribute("img", artikel_1.artikel[index].img);
            newButton.setAttribute("kategorie", artikel_1.artikel[index].kategorie);
            document.getElementById("artikel" + index)?.appendChild(newButton);
            document.getElementById("artikel" + index)?.appendChild(newButton);
            //delete Button
            deleteButton.addEventListener("click", handleRemoveArticle.bind(artikel_1.artikel[index]));
            deleteButton.setAttribute("preis", artikel_1.artikel[index].preis.toString());
            deleteButton.setAttribute("name", artikel_1.artikel[index].name);
            deleteButton.setAttribute("img", artikel_1.artikel[index].img);
            deleteButton.setAttribute("kategorie", artikel_1.artikel[index].kategorie);
            document.getElementById("artikel" + index)?.appendChild(deleteButton);
            document.getElementById("artikel" + index)?.appendChild(deleteButton);
            vorschauUpdate();
        }
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        vorschauUpdate();
    }
    function zaehler(_event) {
        anzahlWare++;
        console.log(anzahlWare);
        saveInLocalStorage(this);
        countPreis += this.preis;
        console.log(countPreis.toFixed(2));
        //countPreis += parseFloat((<HTMLButtonElement>event.target)?.getAttribute("preis")!);
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + " € ";
        vorschauUpdate();
    }
    //Ein-/Ausblenden der Kategorien
    function handleCategoryClick(_click) {
        switch (this.getAttribute("id")) {
            case "waffelbtn":
                waffel();
                break;
            case "eisbtn":
                eis();
                break;
            case "toppingbtn":
                topping();
                break;
        }
    }
    function waffel() {
        document.getElementById("waffel").style.display = "block";
        document.getElementById("eis").style.display = "none";
        document.getElementById("topping").style.display = "none";
        document.getElementById("waffelbtn").style.color = "grey";
        document.getElementById("eisbtn").style.color = "black";
        document.getElementById("toppingbtn").style.color = "black";
    }
    function eis() {
        document.getElementById("eis").style.display = "block";
        document.getElementById("waffel").style.display = "none";
        document.getElementById("topping").style.display = "none";
        document.getElementById("eisbtn").style.color = "grey";
        document.getElementById("waffelbtn").style.color = "black";
        document.getElementById("toppingbtn").style.color = "black";
    }
    function topping() {
        document.getElementById("topping").style.display = "block";
        document.getElementById("waffel").style.display = "none";
        document.getElementById("eis").style.display = "none";
        document.getElementById("toppingbtn").style.color = "grey";
        document.getElementById("waffelbtn").style.color = "black";
        document.getElementById("eisbtn").style.color = "black";
    }
})(artikel || (artikel = {}));
//# sourceMappingURL=Script.js.map