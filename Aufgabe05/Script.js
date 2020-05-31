"use strict";
console.log("Hallo");
//Rotwein-Produkte
var rotwein;
(function (rotwein) {
    let hexspaetburgunder = {
        _img: "HexSpateburgunder.jpg",
        _name: "2018 Spätburgunder - Hexenflasche",
        _beschreibung: "Für einen Abend zu zweit",
        _preis: 7.90
    };
    let steak = {
        _img: "SteakAG.jpg",
        _name: "Steak trifft Wein Alde Gott",
        _beschreibung: "Geil zu einem blutigen Steak",
        _preis: 5.70
    };
    let agSpaetburgunder = {
        _img: "SpaetburgunderAG.jpg",
        _name: "Spätburgunder Alde Gott",
        _beschreibung: "Für gemeinsame Stunden",
        _preis: 7.90
    };
    let agQuali = {
        _img: "SpaetburgunderQualiAG.jpg",
        _name: "Spätburgunder Qualitätswein Alde Gott",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 6.60
    };
    let obSpaetburgunder = {
        _img: "spateburgunderOK.jpg",
        _name: "Spätburgunder Oberkircher Winzer",
        _beschreibung: "Für schöne Soonnenuntergänge",
        _preis: 5.90
    };
    let smsOk = {
        _img: "SMSOK.jpg",
        _name: "SMS- Rotwein QbA lieblich",
        _beschreibung: "Lieblicher Rotwein - Gute Wahl",
        _preis: 8.00
    };
    let cuveeok = {
        _img: "cuveeok.jpg",
        _name: "Cuvée Royal 2015",
        _beschreibung: "Verzaubern Sie Ihre Frau mit einem edlen Tropfen",
        _preis: 34.90
    };
    let rotweinProdukte = [hexspaetburgunder, steak, agSpaetburgunder, agQuali, obSpaetburgunder, smsOk, cuveeok];
    //Produkte einschleifen
    for (let _index = 0; _index < rotweinProdukte.length; _index++) {
        //Div erzeugen
        let _newDiv = document.createElement("div");
        _newDiv.setAttribute("class", "rotwein-div");
        _newDiv.setAttribute("id", "rotwein-produkt" + _index);
        document.getElementById("rotwein")?.appendChild(_newDiv);
        //Produktbild hinzufügen
        let _newImg = document.createElement("img");
        _newImg.setAttribute("src", rotweinProdukte[_index]._img);
        _newImg.setAttribute("alt", "RotweinProdukte");
        _newImg.setAttribute("class", "produktbild");
        document.getElementById("rotwein-produkt" + _index)?.appendChild(_newImg);
        //Produktbezeichnung hinzufügen
        let _newH3 = document.createElement("h3");
        _newH3.innerHTML = rotweinProdukte[_index]._name;
        document.getElementById("rotwein-produkt" + _index)?.appendChild(_newH3);
        //Produkt_beschreibung hinzufügen
        let _newP = document.createElement("p");
        _newP.innerHTML = rotweinProdukte[_index]._beschreibung;
        document.getElementById("rotwein-produkt" + _index)?.appendChild(_newP);
        // _preis hinzufügen
        let _newPreis = document.createElement("h4");
        _newPreis.innerHTML = rotweinProdukte[_index]._preis + "€";
        document.getElementById("rotwein-produkt" + _index)?.appendChild(_newPreis);
        //Button hinzufügen
        let _newButton = document.createElement("button");
        _newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("rotwein-produkt" + _index)?.appendChild(_newButton);
    }
})(rotwein || (rotwein = {}));
//Weißwein-Produkte
var Weißwein;
(function (Weißwein) {
    let spaetburgunderWeissAG = {
        _img: "SpaetburgunderWeissherbstAG.jpg",
        _name: "Spätburgunder Weißherbst Trocken Alde Gott",
        _beschreibung: "Für tolle Sommerabende",
        _preis: 9.50
    };
    let grauburgunderHex = {
        _img: "Grauburgunder.jpg",
        _name: "Grauburgunder Hex vom Dasenstein",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 5.70
    };
    let rivanerHex = {
        _img: "MuellerThurgau.jpg",
        _name: "Rivaner Hex vom Dasenstein",
        _beschreibung: "Perfekt zu einem leichten Sommeressen",
        _preis: 9.90
    };
    let muellerAg = {
        _img: "MuellerThurgauAG.jpg",
        _name: "Müller Thurgau Alde Gott",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 5.70
    };
    let rieslingAg = {
        _img: "RieslingAG.jpg",
        _name: "Riesling Alde Gott",
        _beschreibung: "Für ein romantisches Picknick",
        _preis: 6.70
    };
    let rulaenderhex = {
        _img: "Rulaender.jpg",
        _name: "Ruländer Spätlese Hex vom Dasenstein",
        _beschreibung: "Einen Wein in den Weinbergen?",
        _preis: 9.50
    };
    let weißweinProdukte = [spaetburgunderWeissAG, grauburgunderHex, rivanerHex, muellerAg, rieslingAg, rulaenderhex];
    //Produkte einschleifen
    for (let _index = 0; _index < weißweinProdukte.length; _index++) {
        //Div erzeugen
        let _newDiv = document.createElement("div");
        _newDiv.setAttribute("class", "weißwein-div");
        _newDiv.setAttribute("id", "weißwein-produkt" + _index);
        document.getElementById("weißwein")?.appendChild(_newDiv);
        //Produktbild hinzufügen
        let _newImg = document.createElement("img");
        _newImg.setAttribute("src", weißweinProdukte[_index]._img);
        _newImg.setAttribute("alt", "WeißweinProdukte");
        _newImg.setAttribute("class", "produktbild");
        document.getElementById("weißwein-produkt" + _index)?.appendChild(_newImg);
        //Produktbezeichnung hinzufügen
        let _newH3 = document.createElement("h3");
        _newH3.innerHTML = weißweinProdukte[_index]._name;
        document.getElementById("weißwein-produkt" + _index)?.appendChild(_newH3);
        //Produkt_beschreibung hinzufügen
        let _newP = document.createElement("p");
        _newP.innerHTML = weißweinProdukte[_index]._beschreibung;
        document.getElementById("weißwein-produkt" + _index)?.appendChild(_newP);
        // _preis hinzufügen
        let _newPreis = document.createElement("h4");
        _newPreis.innerHTML = weißweinProdukte[_index]._preis + "€";
        document.getElementById("weißwein-produkt" + _index)?.appendChild(_newPreis);
        //Button hinzufügen
        let _newButton = document.createElement("button");
        _newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("weißwein-produkt" + _index)?.appendChild(_newButton);
    }
})(Weißwein || (Weißwein = {}));
//Rose-Produkte
var Rose;
(function (Rose) {
    let rosequali = {
        _img: "Rose.jpg",
        _name: "Rosé Qualitätswein",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 7.80
    };
    let roseProdukte = [rosequali];
    //Produkte einschleifen
    for (let _index = 0; _index < roseProdukte.length; _index++) {
        //Div erzeugen
        let _newDiv = document.createElement("div");
        _newDiv.setAttribute("class", "rose-div");
        _newDiv.setAttribute("id", "rose-produkt" + _index);
        document.getElementById("rose")?.appendChild(_newDiv);
        //Produktbild hinzufügen
        let _newImg = document.createElement("img");
        _newImg.setAttribute("src", roseProdukte[_index]._img);
        _newImg.setAttribute("alt", "RoseProdukte");
        _newImg.setAttribute("class", "produktbild");
        document.getElementById("rose-produkt" + _index)?.appendChild(_newImg);
        //Produktbezeichnung hinzufügen
        let _newH3 = document.createElement("h3");
        _newH3.innerHTML = roseProdukte[_index]._name;
        document.getElementById("rose-produkt" + _index)?.appendChild(_newH3);
        //Produkt_beschreibung hinzufügen
        let _newP = document.createElement("p");
        _newP.innerHTML = roseProdukte[_index]._beschreibung;
        document.getElementById("rose-produkt" + _index)?.appendChild(_newP);
        // _preis hinzufügen
        let _newPreis = document.createElement("h4");
        _newPreis.innerHTML = roseProdukte[_index]._preis + "€";
        document.getElementById("rose-produkt" + _index)?.appendChild(_newPreis);
        //Button hinzufügen
        let _newButton = document.createElement("button");
        _newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("rose-produkt" + _index)?.appendChild(_newButton);
    }
})(Rose || (Rose = {}));
//# sourceMappingURL=Script.js.map