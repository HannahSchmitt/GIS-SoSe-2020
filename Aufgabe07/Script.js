"use strict";
var artikel;
(function (artikel_1) {
    let anzahlWare = 0;
    let countPreis = 0;
    let zaehlerAnzahl = document.createElement("p");
    let anzeigeArtikel = document.createElement("div");
    anzeigeArtikel.id = "anzeigeArtikel";
    let rotweinButton = document.getElementById("rotweinbtn");
    rotweinButton.addEventListener("click", handleCategoryClick.bind(rotweinButton));
    let weißweinButton = document.getElementById("weißweinbtn");
    weißweinButton.addEventListener("click", handleCategoryClick.bind(weißweinButton));
    let roseButton = document.getElementById("rosebtn");
    roseButton.addEventListener("click", handleCategoryClick.bind(roseButton));
    let artikel = [];
    window.addEventListener("load", init);
    //Json Daten werden vom Server gezogen
    function init() {
        let url = "Data.json";
        communicate(url);
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        artikel = await response.json();
        console.log("End");
        createDynamicContent();
    }
    function saveInLocalStorage(_inputArticle) {
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle.name;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    //Produkte einschleifen
    function createDynamicContent() {
        for (let index = 0; index < artikel.length; index++) {
            //Div erzeugen
            let rotDiv = document.createElement("div");
            rotDiv.setAttribute("class", "rotweinflaschen");
            rotDiv.setAttribute("id", "artikel" + index);
            document.getElementById("rotwein")?.appendChild(rotDiv);
            //Produktbild hinzufügen‹
            let rotImg = document.createElement("img");
            rotImg.setAttribute("src", artikel[index].img);
            rotImg.setAttribute("alt", "artikel");
            rotImg.setAttribute("class", "produktbild");
            document.getElementById("artikel" + index)?.appendChild(rotImg);
            //Produktbezeichnung hinzufügen
            let rotH3 = document.createElement("h3");
            rotH3.innerHTML = artikel[index].name;
            document.getElementById("artikel" + index)?.appendChild(rotH3);
            //Produktbeschreibung hinzufügen
            let rotP = document.createElement("p");
            rotP.innerHTML = artikel[index].beschreibung;
            document.getElementById("artikel" + index)?.appendChild(rotP);
            // preis hinzufügen
            let rotPreis = document.createElement("p");
            rotPreis.innerHTML = artikel[index].preis + "€";
            document.getElementById("artikel" + index)?.appendChild(rotPreis);
            switch (artikel[index].kategorie) {
                case "rotwein":
                    let getContainerRotwein = document.getElementById("rotwein");
                    getContainerRotwein.appendChild(rotDiv);
                    break;
                case "weißwein":
                    let getContainerWeißwein = document.getElementById("weißwein");
                    getContainerWeißwein.appendChild(rotDiv);
                    break;
                case "rose":
                    let getContainerRose = document.getElementById("rose");
                    getContainerRose.appendChild(rotDiv);
                    break;
                default:
                    break;
            }
            //Button verknüpfen/hinzufügen
            let newButton = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            //"Button" in Warenkorb
            newButton.addEventListener("click", zaehler.bind(artikel[index]));
            newButton.setAttribute("preis", artikel[index].preis.toString());
            newButton.setAttribute("name", artikel[index].name);
            newButton.setAttribute("img", artikel[index].img);
            newButton.setAttribute("beschreibung", artikel[index].beschreibung);
            newButton.setAttribute("kategorie", artikel[index].kategorie);
            document.getElementById("artikel" + index)?.appendChild(newButton);
            document.getElementById("artikel" + index)?.appendChild(newButton);
        }
    }
    function zaehler(_event) {
        anzahlWare++;
        console.log(anzahlWare);
        saveInLocalStorage(this);
        countPreis += this.preis;
        console.log(countPreis.toFixed(2));
        //Bubble erstellen bei min. 1 Artikel
        if (anzahlWare >= 0) {
            document.getElementById("produktBubble")?.appendChild(anzeigeArtikel);
        }
        //Zahl in Bubble anzeigen
        zaehlerAnzahl.innerHTML = "" + anzahlWare;
        document.getElementById("anzeigeArtikel")?.appendChild(zaehlerAnzahl);
    }
    //Ein-/Ausblenden der Kategorien
    function handleCategoryClick(_click) {
        switch (this.getAttribute("id")) {
            case "rotweinbtn":
                rotwein();
                break;
            case "weißweinbtn":
                weißwein();
                break;
            case "rosebtn":
                rose();
                break;
        }
    }
    function rotwein() {
        document.getElementById("rotwein").style.display = "block";
        document.getElementById("weißwein").style.display = "none";
        document.getElementById("rose").style.display = "none";
        document.getElementById("rotweinbtn").style.color = "grey";
        document.getElementById("weißweinbtn").style.color = "black";
        document.getElementById("rosebtn").style.color = "black";
    }
    function weißwein() {
        document.getElementById("weißwein").style.display = "block";
        document.getElementById("rotwein").style.display = "none";
        document.getElementById("rose").style.display = "none";
        document.getElementById("weißweinbtn").style.color = "grey";
        document.getElementById("rotweinbtn").style.color = "black";
        document.getElementById("rosebtn").style.color = "black";
    }
    function rose() {
        document.getElementById("rose").style.display = "block";
        document.getElementById("rotwein").style.display = "none";
        document.getElementById("weißwein").style.display = "none";
        document.getElementById("rosebtn").style.color = "grey";
        document.getElementById("rotweinbtn").style.color = "black";
        document.getElementById("weißweinbtn").style.color = "black";
    }
})(artikel || (artikel = {}));
//# sourceMappingURL=Script.js.map