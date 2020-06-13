namespace artikel {
    let anzahlWare: number = 0;
    let countPreis: number = 0;

    let zaehlerAnzahl: HTMLParagraphElement = document.createElement("p");

    let anzeigeArtikel: HTMLDivElement = document.createElement("div");
    anzeigeArtikel.id = "anzeigeArtikel";

    let rotweinButton: HTMLElement = <HTMLElement>document.getElementById("rotweinbtn");
    rotweinButton.addEventListener("click", handleCategoryClick.bind(rotweinButton));

    let weißweinButton: HTMLElement = <HTMLElement>document.getElementById("weißweinbtn");
    weißweinButton.addEventListener("click", handleCategoryClick.bind(weißweinButton));

    let roseButton: HTMLElement = <HTMLElement>document.getElementById("rosebtn");
    roseButton.addEventListener("click", handleCategoryClick.bind(roseButton));

    let artikel: Artikel[] = [];
    window.addEventListener("load", init);

    export interface Artikel {
        img: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }

    //Json Daten werden vom Server gezogen
    function init(): void {
        let url: string = "Data.json";
        communicate(url);
    }
    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        artikel = await response.json();
        console.log("End");
        createDynamicContent();
    }

    function saveInLocalStorage(_inputArticle: Artikel): void {
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.name;

        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    //Produkte einschleifen
    function createDynamicContent(): void {
        for (let index: number = 0; index < artikel.length; index++) {
            //Div erzeugen
            let rotDiv: HTMLDivElement = document.createElement("div");
            rotDiv.setAttribute("class", "rotweinflaschen");
            rotDiv.setAttribute("id", "artikel" + index);
            document.getElementById("rotwein")?.appendChild(rotDiv);
            //Produktbild hinzufügen‹
            let rotImg: HTMLElement = document.createElement("img");
            rotImg.setAttribute("src", artikel[index].img);
            rotImg.setAttribute("alt", "artikel");
            rotImg.setAttribute("class", "produktbild");
            document.getElementById("artikel" + index)?.appendChild(rotImg);
            //Produktbezeichnung hinzufügen
            let rotH3: HTMLHeadingElement = document.createElement("h3");
            rotH3.innerHTML = artikel[index].name;
            document.getElementById("artikel" + index)?.appendChild(rotH3);
            //Produktbeschreibung hinzufügen
            let rotP: HTMLParagraphElement = document.createElement("p");
            rotP.innerHTML = artikel[index].beschreibung;
            document.getElementById("artikel" + index)?.appendChild(rotP);
            // preis hinzufügen
            let rotPreis: HTMLParagraphElement = document.createElement("p");
            rotPreis.innerHTML = artikel[index].preis + "€";
            document.getElementById("artikel" + index)?.appendChild(rotPreis);

            switch (artikel[index].kategorie) {
                case "rotwein":
                    let getContainerRotwein: HTMLElement = document.getElementById("rotwein")!;
                    getContainerRotwein.appendChild(rotDiv);
                    break;
                case "weißwein":
                    let getContainerWeißwein: HTMLElement = document.getElementById("weißwein")!;
                    getContainerWeißwein.appendChild(rotDiv);
                    break;
                case "rose":

                    let getContainerRose: HTMLElement = document.getElementById("rose")!;
                    getContainerRose.appendChild(rotDiv);
                    break;
                default:
                    break;
            }
            //Button verknüpfen/hinzufügen
            let newButton: HTMLButtonElement = document.createElement("button");
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

    function zaehler(this: Artikel, _event: Event): void {
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

}
