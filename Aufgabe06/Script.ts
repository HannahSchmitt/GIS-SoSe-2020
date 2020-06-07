
namespace artikel {


    interface Artikel {
        _img: string;
        _name: string;
        _beschreibung: string;
        _preis: number;
        _kategorie: string;
    }
    //rotwein Artikel
    let hexspaetburgunder: Artikel = {
        _img: "HexSpateburgunder.jpg",
        _name: "2018 Spätburgunder - Hexenflasche",
        _beschreibung: "Für einen Abend zu zweit",
        _preis: 7.99,
        _kategorie: "rotwein"
    };

    let steak: Artikel = {
        _img: "SteakAG.jpg",
        _name: "Steak trifft Wein Alde Gott",
        _beschreibung: "Geil zu einem blutigen Steak",
        _preis: 5.79,
        _kategorie: "rotwein"
    };

    let agSpaetburgunder: Artikel = {
        _img: "SpaetburgunderAG.jpg",
        _name: "Spätburgunder Alde Gott",
        _beschreibung: "Für gemeinsame Stunden",
        _preis: 7.99,
        _kategorie: "weißwein"
    };

    let agQuali: Artikel = {
        _img: "SpaetburgunderQualiAG.jpg",
        _name: "Spätburgunder Qualitätswein Alde Gott",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 6.65,
        _kategorie: "rotwein"
    };

    let obSpaetburgunder: Artikel = {
        _img: "spateburgunderOK.jpg",
        _name: "Spätburgunder Oberkircher Winzer",
        _beschreibung: "Für schöne Soonnenuntergänge",
        _preis: 5.95,
        _kategorie: "rotwein"
    };

    let smsOk: Artikel = {
        _img: "SMSOK.jpg",
        _name: "SMS- Rotwein QbA lieblich",
        _beschreibung: "Lieblicher Rotwein - Gute Wahl",
        _preis: 8.07,
        _kategorie: "rotwein"
    };

    let cuveeok: Artikel = {
        _img: "cuveeok.jpg",
        _name: "Cuvée Royal 2015",
        _beschreibung: "Verzaubern Sie Ihre Frau mit einem edlen Tropfen",
        _preis: 34.99,
        _kategorie: "rotwein"
    };
    //Weißwein Artikel
    let spaetburgunderWeissAG: Artikel = {
        _img: "SpaetburgunderWeissherbstAG.jpg",
        _name: "Spätburgunder Weißherbst Trocken Alde Gott",
        _beschreibung: "Für tolle Sommerabende",
        _preis: 9.58,
        _kategorie: "rose"
    };

    let grauburgunderHex: Artikel = {
        _img: "Grauburgunder.jpg",
        _name: "Grauburgunder Hex vom Dasenstein",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 5.79,
        _kategorie: "weißwein"
    };

    let rivanerHex: Artikel = {
        _img: "MuellerThurgau.jpg",
        _name: "Rivaner Hex vom Dasenstein",
        _beschreibung: "Perfekt zu einem leichten Sommeressen",
        _preis: 9.99,
        _kategorie: "weißwein"
    };

    let muellerAg: Artikel = {
        _img: "MuellerThurgauAG.jpg",
        _name: "Müller Thurgau Alde Gott",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 5.79,
        _kategorie: "weißwein"
    };

    let rieslingAg: Artikel = {
        _img: "RieslingAG.jpg",
        _name: "Riesling Alde Gott",
        _beschreibung: "Für ein romantisches Picknick",
        _preis: 6.78,
        _kategorie: "weißwein"
    };

    let rulaenderhex: Artikel = {
        _img: "Rulaender.jpg",
        _name: "Ruländer Spätlese Hex vom Dasenstein",
        _beschreibung: "Einen Wein in den Weinbergen?",
        _preis: 9.57,
        _kategorie: "weißwein"
    };
    //Rose Artikel
    let rosequali: Artikel = {
        _img: "Rose.jpg",
        _name: "Rosé Qualitätswein",
        _beschreibung: "Für schöne Sonnenuntergänge",
        _preis: 7.81,
        _kategorie: "rose"
    };
    //Alle Artikel aus dem Shop
    let artikel: Artikel[] = [hexspaetburgunder, steak, agSpaetburgunder, agQuali, obSpaetburgunder, smsOk, cuveeok, spaetburgunderWeissAG, grauburgunderHex, rivanerHex, muellerAg, rieslingAg, rulaenderhex, rosequali];

    //Produkte einschleifen
    for (let _index: number = 0; _index < artikel.length; _index++) {
        switch (artikel[_index]._kategorie) {
            //Rotwein
            case "rotwein":
                //Div erzeugen
                let _rotDiv: HTMLDivElement = document.createElement("div");
                _rotDiv.setAttribute("class", "rotweinflaschen");
                _rotDiv.setAttribute("id", "artikel" + _index);
                document.getElementById("rotwein")?.appendChild(_rotDiv);
                //Produktbild hinzufügen‹
                let _rotImg: HTMLElement = document.createElement("img");
                _rotImg.setAttribute("src", artikel[_index]._img);
                _rotImg.setAttribute("alt", "artikel");
                _rotImg.setAttribute("class", "produktbild");
                document.getElementById("artikel" + _index)?.appendChild(_rotImg);
                //Produktbezeichnung hinzufügen
                let _rotH3: HTMLHeadingElement = document.createElement("h3");
                _rotH3.innerHTML = artikel[_index]._name;
                document.getElementById("artikel" + _index)?.appendChild(_rotH3);
                //Produkt_beschreibung hinzufügen
                let _rotP: HTMLParagraphElement = document.createElement("p");
                _rotP.innerHTML = artikel[_index]._beschreibung;
                document.getElementById("artikel" + _index)?.appendChild(_rotP);
                // _preis hinzufügen
                let _rotPreis: HTMLParagraphElement = document.createElement("p");
                _rotPreis.innerHTML = artikel[_index]._preis + "€";
                document.getElementById("artikel" + _index)?.appendChild(_rotPreis);
                break;


            //Weißwein
            case "weißwein":
                //Div erzeugen
                let _weißDiv: HTMLDivElement = document.createElement("div");
                _weißDiv.setAttribute("class", "weißweinflaschen");
                _weißDiv.setAttribute("id", "artikel" + _index);
                document.getElementById("weißwein")?.appendChild(_weißDiv);
                //Produktbild hinzufügen‹
                let _weißImg: HTMLElement = document.createElement("img");
                _weißImg.setAttribute("src", artikel[_index]._img);
                _weißImg.setAttribute("alt", "artikel");
                _weißImg.setAttribute("class", "produktbild");
                document.getElementById("artikel" + _index)?.appendChild(_weißImg);
                //Produktbezeichnung hinzufügen
                let _weißH3: HTMLHeadingElement = document.createElement("h3");
                _weißH3.innerHTML = artikel[_index]._name;
                document.getElementById("artikel" + _index)?.appendChild(_weißH3);
                //Produkt_beschreibung hinzufügen
                let _weißP: HTMLParagraphElement = document.createElement("p");
                _weißP.innerHTML = artikel[_index]._beschreibung;
                document.getElementById("artikel" + _index)?.appendChild(_weißP);
                // _preis hinzufügen
                let _weißPreis: HTMLParagraphElement = document.createElement("p");
                _weißPreis.innerHTML = artikel[_index]._preis + "€";
                document.getElementById("artikel" + _index)?.appendChild(_weißPreis);
                break;


            //Rose
            case "rose":
                //Div erzeugen
                let _roseDiv: HTMLDivElement = document.createElement("div");
                _roseDiv.setAttribute("class", "roseweinflaschen");
                _roseDiv.setAttribute("id", "artikel" + _index);
                document.getElementById("rose")?.appendChild(_roseDiv);
                //Produktbild hinzufügen‹
                let _roseImg: HTMLElement = document.createElement("img");
                _roseImg.setAttribute("src", artikel[_index]._img);
                _roseImg.setAttribute("alt", "artikel");
                _roseImg.setAttribute("class", "produktbild");
                document.getElementById("artikel" + _index)?.appendChild(_roseImg);
                //Produktbezeichnung hinzufügen
                let _roseH3: HTMLHeadingElement = document.createElement("h3");
                _roseH3.innerHTML = artikel[_index]._name;
                document.getElementById("artikel" + _index)?.appendChild(_roseH3);
                //Produkt_beschreibung hinzufügen
                let _roseP: HTMLParagraphElement = document.createElement("p");
                _roseP.innerHTML = artikel[_index]._beschreibung;
                document.getElementById("artikel" + _index)?.appendChild(_roseP);
                // _preis hinzufügen
                let _rosePreis: HTMLParagraphElement = document.createElement("p");
                _rosePreis.innerHTML = artikel[_index]._preis + "€";
                document.getElementById("artikel" + _index)?.appendChild(_rosePreis);

                break;
            default:
                break;

        }
        //Button verknüpfen/hinzufügen
        let _newButton: HTMLButtonElement = document.createElement("button");
        _newButton.innerHTML = "Jetzt kaufen";
        //"Button" in Warenkorb
        _newButton.addEventListener("click", zaehler);
        _newButton.setAttribute("preis", artikel[_index]._preis.toString());
        document.getElementById("artikel" + _index)?.appendChild(_newButton);
        document.getElementById("artikel" + _index)?.appendChild(_newButton);
    }

    let anzahlWare: number = 0;
    let countPreis: number = 0;


    //Zähler für die Anzahl erstellen
    let zaehlerAnzahl: HTMLParagraphElement = document.createElement("p");

    //Bubble erstellen beim Einkaufswagen
    let anzeigeArtikel: HTMLDivElement = document.createElement("div");
    anzeigeArtikel.id = "anzeigeArtikel";
    window.addEventListener("load", zaehler);

    //Funktion des "Kaufen"-Buttons
    function zaehler(_event: Event): void {
        anzahlWare++;
        console.log(anzahlWare.toFixed(2));

        countPreis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
        console.log(countPreis);

        //Bubble erstellen bei min. 1 Artikel
        if (anzahlWare >= 0) {
            document.getElementById("produktBubble")?.appendChild(anzeigeArtikel);
        }

        //Zahl in Bubble anzeigen
        zaehlerAnzahl.innerHTML = "" + anzahlWare;
        document.getElementById("anzeigeArtikel")?.appendChild(zaehlerAnzahl);

    }


    //Ein-/Ausblenden der Kategorien
    function handleCategoryClick(this: HTMLElement, _click: MouseEvent): void {
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
    function rotwein(): void {
        (<HTMLElement>document.getElementById("rotwein")).style.display = "block";
        (<HTMLElement>document.getElementById("weißwein")).style.display = "none";
        (<HTMLElement>document.getElementById("rose")).style.display = "none";
        (<HTMLElement>document.getElementById("rotweinbtn")).style.color = "grey";
        (<HTMLElement>document.getElementById("weißweinbtn")).style.color = "black";
        (<HTMLElement>document.getElementById("rosebtn")).style.color = "black";
    }

    function weißwein(): void {
        (<HTMLElement>document.getElementById("weißwein")).style.display = "block";
        (<HTMLElement>document.getElementById("rotwein")).style.display = "none";
        (<HTMLElement>document.getElementById("rose")).style.display = "none";
        (<HTMLElement>document.getElementById("weißweinbtn")).style.color = "grey";
        (<HTMLElement>document.getElementById("rotweinbtn")).style.color = "black";
        (<HTMLElement>document.getElementById("rosebtn")).style.color = "black";
    }
    function rose(): void {
        (<HTMLElement>document.getElementById("rose")).style.display = "block";
        (<HTMLElement>document.getElementById("rotwein")).style.display = "none";
        (<HTMLElement>document.getElementById("weißwein")).style.display = "none";
        (<HTMLElement>document.getElementById("rosebtn")).style.color = "grey";
        (<HTMLElement>document.getElementById("rotweinbtn")).style.color = "black";
        (<HTMLElement>document.getElementById("weißweinbtn")).style.color = "black";


    }
    //Neue Variable erstellen, Verlinkung zum Button 
    let rotweinButton: HTMLElement = <HTMLElement>document.getElementById("rotweinbtn");
    rotweinButton.addEventListener("click", handleCategoryClick.bind(rotweinButton));

    let weißweinButton: HTMLElement = <HTMLElement>document.getElementById("weißweinbtn");
    weißweinButton.addEventListener("click", handleCategoryClick.bind(weißweinButton));

    let roseButton: HTMLElement = <HTMLElement>document.getElementById("rosebtn");
    roseButton.addEventListener("click", handleCategoryClick.bind(roseButton));

}
