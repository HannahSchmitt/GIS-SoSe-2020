"use strict";
//Rotwein-Produkte
var artikel;
(function (artikel_1) {
    let hexspaetburgunder = {
        _img: "HexSpateburgunder.jpg",
        _name: "2018 Spätburgunder - Hexenflasche",
        _beschreibung: "Für einen Abend zu zweit",
        _preis: 7.90,
        _kategorie: "rotwein"
    };
    let steak = {
        _img: "SteakAG.jpg",
        _name: "Steak trifft Wein Alde Gott",
        _beschreibung: "Geil zu einem blutigen Steak",
        _preis: 5.70,
        _kategorie: "rotwein"
    };
    let agSpaetburgunder = {
        _img: "SpaetburgunderAG.jpg",
        _name: "Spätburgunder Alde Gott",
        _beschreibung: "Für gemeinsame Stunden",
        _preis: 7.90,
        _kategorie: "rotwein"
    };
    let agQuali = {
        _img: "SpaetburgunderQualiAG.jpg",
        _name: "Spätburgunder Qualitätswein Alde Gott",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 6.60,
        _kategorie: "rotwein"
    };
    let obSpaetburgunder = {
        _img: "spateburgunderOK.jpg",
        _name: "Spätburgunder Oberkircher Winzer",
        _beschreibung: "Für schöne Soonnenuntergänge",
        _preis: 5.90,
        _kategorie: "rotwein"
    };
    let smsOk = {
        _img: "SMSOK.jpg",
        _name: "SMS- Rotwein QbA lieblich",
        _beschreibung: "Lieblicher Rotwein - Gute Wahl",
        _preis: 8.00,
        _kategorie: "rotwein"
    };
    let cuveeok = {
        _img: "cuveeok.jpg",
        _name: "Cuvée Royal 2015",
        _beschreibung: "Verzaubern Sie Ihre Frau mit einem edlen Tropfen",
        _preis: 34.90,
        _kategorie: "rotwein"
    };
    let spaetburgunderWeissAG = {
        _img: "SpaetburgunderWeissherbstAG.jpg",
        _name: "Spätburgunder Weißherbst Trocken Alde Gott",
        _beschreibung: "Für tolle Sommerabende",
        _preis: 9.50,
        _kategorie: "weißwein"
    };
    let grauburgunderHex = {
        _img: "Grauburgunder.jpg",
        _name: "Grauburgunder Hex vom Dasenstein",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 5.70,
        _kategorie: "weißwein"
    };
    let rivanerHex = {
        _img: "MuellerThurgau.jpg",
        _name: "Rivaner Hex vom Dasenstein",
        _beschreibung: "Perfekt zu einem leichten Sommeressen",
        _preis: 9.90,
        _kategorie: "weißwein"
    };
    let muellerAg = {
        _img: "MuellerThurgauAG.jpg",
        _name: "Müller Thurgau Alde Gott",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 5.70,
        _kategorie: "weißwein"
    };
    let rieslingAg = {
        _img: "RieslingAG.jpg",
        _name: "Riesling Alde Gott",
        _beschreibung: "Für ein romantisches Picknick",
        _preis: 6.70,
        _kategorie: "weißwein"
    };
    let rulaenderhex = {
        _img: "Rulaender.jpg",
        _name: "Ruländer Spätlese Hex vom Dasenstein",
        _beschreibung: "Einen Wein in den Weinbergen?",
        _preis: 9.50,
        _kategorie: "weißwein"
    };
    let rosequali = {
        _img: "Rose.jpg",
        _name: "Rosé Qualitätswein",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 7.80,
        _kategorie: "rose"
    };
    let artikel = [hexspaetburgunder, steak, agSpaetburgunder, agQuali, obSpaetburgunder, smsOk, cuveeok, spaetburgunderWeissAG, grauburgunderHex, rivanerHex, muellerAg, rieslingAg, rulaenderhex, rosequali];
    //Produkte einschleifen
    for (let _index = 0; _index < artikel.length; _index++) {
        //Div erzeugen
        let _newDiv = document.createElement("div");
        _newDiv.setAttribute("class", "weinflaschen");
        _newDiv.setAttribute("id", "rotwein-produkt" + _index);
        //Produktbild hinzufügen‹
        let _newImg = document.createElement("img");
        _newImg.setAttribute("src", artikel[_index]._img);
        _newImg.setAttribute("alt", "RotweinProdukte");
        _newImg.setAttribute("class", "produktbild");
        //Produktbezeichnung hinzufügen
        let _newH3 = document.createElement("h3");
        _newH3.innerHTML = artikel[_index]._name;
        //Produkt_beschreibung hinzufügen
        let _newP = document.createElement("p");
        _newP.innerHTML = artikel[_index]._beschreibung;
        // _preis hinzufügen
        let _newPreis = document.createElement("h4");
        _newPreis.innerHTML = artikel[_index]._preis + "€";
        //Button hinzufügen
        let _newButton = document.createElement("button");
        _newButton.innerHTML = "Jetzt kaufen";
        switch (artikel[_index]._kategorie) {
            case "rotwein":
                document.getElementById("rotwein")?.appendChild(_newDiv);
                document.getElementById("rotwein" + _index)?.appendChild(_newImg);
                document.getElementById("rotwein" + _index)?.appendChild(_newH3);
                document.getElementById("rotwein" + _index)?.appendChild(_newP);
                document.getElementById("rotwein" + _index)?.appendChild(_newPreis);
                document.getElementById("rotwein" + _index)?.appendChild(_newButton);
                break;
            case "weißwein":
                document.getElementById("weißwein")?.appendChild(_newDiv);
                document.getElementById("weißwein" + _index)?.appendChild(_newImg);
                document.getElementById("weißwein" + _index)?.appendChild(_newH3);
                document.getElementById("weißwein" + _index)?.appendChild(_newP);
                document.getElementById("weißwein" + _index)?.appendChild(_newPreis);
                document.getElementById("weißwein" + _index)?.appendChild(_newButton);
            case "rose":
                document.getElementById("rose")?.appendChild(_newDiv);
                document.getElementById("rose" + _index)?.appendChild(_newImg);
                document.getElementById("rose" + _index)?.appendChild(_newH3);
                document.getElementById("rose" + _index)?.appendChild(_newP);
                document.getElementById("rose" + _index)?.appendChild(_newPreis);
                document.getElementById("rose" + _index)?.appendChild(_newButton);
        }
    }
})(artikel || (artikel = {}));
//# sourceMappingURL=Script.js.map