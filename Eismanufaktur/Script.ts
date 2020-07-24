namespace artikel {
    let anzahlWare: number = 0;
    let countPreis: number = 0;
    let gesamtPreis: number;
    let pGesamtpreis: HTMLParagraphElement;
    let divInhalt: HTMLDivElement = document.createElement("div");
    let anzeigeArtikel: HTMLDivElement = document.createElement("div");
    anzeigeArtikel.id = "anzeigeArtikel";

    let waffelButton: HTMLElement = <HTMLElement>document.getElementById("waffelbtn");
    let eisButton: HTMLElement = <HTMLElement>document.getElementById("eisbtn");
    let toppingButton: HTMLElement = <HTMLElement>document.getElementById("toppingbtn");
    

    export let artikel: Artikel[] = [];
    window.addEventListener("load", init);

    export interface Artikel {
        img: string;
        name: string;
        preis: number;
        kategorie: string;
    }

    //Json Daten werden vom Server gezogen
    function init(): void {
        let url: string = "Data.json";
        communicate(url);
        divInhalt = <HTMLDivElement>document.getElementById("vorschauUpdate");

        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        vorschauUpdate();
        createButtons();
        
    }

    function createButtons(): void {
        waffelButton.addEventListener("click", handleCategoryClick.bind(waffelButton));
        eisButton.addEventListener("click", handleCategoryClick.bind(eisButton));
        toppingButton.addEventListener("click", handleCategoryClick.bind(toppingButton));
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        artikel = await response.json();
        console.log("End");
        createDynamicContent();
    }

    function vorschauUpdate(): void {
        divInhalt.innerHTML = "";
        gesamtPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let artikeljson: string = <string>localStorage.getItem(key);
            let item: Artikel = <Artikel>JSON.parse(artikeljson);

            gesamtPreis += item.preis;
            showArtikel(item);

        }
        

    }

    function showArtikel(_categorys: Artikel): void {
        //DIV erstellen
        let newDiv: HTMLDivElement = document.createElement("div");
        divInhalt.appendChild(newDiv);
        newDiv.id = _categorys.name;
        console.log(newDiv.id);

        //getImg from localStorage aufrufen
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = _categorys.img;
        newDiv.appendChild(imgElement);

        //get Beschreibung
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _categorys.name;
        newDiv.appendChild(name);
    }

    function saveInLocalStorage(_inputArticle: Artikel): void {
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.name;

        localStorage.setItem(key, itemString);
        console.log(localStorage);

        vorschauUpdate();
    }

    //Produkte einschleifen
    function createDynamicContent(): void {
        for (let index: number = 0; index < artikel.length; index++) {
            //contentDiv erzeugen
            let contentDiv: HTMLDivElement = document.createElement("div");
            contentDiv.setAttribute("class", "waffel");
            contentDiv.setAttribute("id", "artikel" + index);
            document.getElementById("waffel")?.appendChild(contentDiv);
            //Produktbild hinzufügen‹
            let contentImg: HTMLElement = document.createElement("img");
            contentImg.setAttribute("src", artikel[index].img);
            contentImg.setAttribute("alt", "artikel");
            contentImg.setAttribute("class", "produktbild");
            document.getElementById("artikel" + index)?.appendChild(contentImg);
            //Produktbezeichnung hinzufügen
            let H3: HTMLHeadingElement = document.createElement("h3");
            H3.innerHTML = artikel[index].name;
            document.getElementById("artikel" + index)?.appendChild(H3);
            // preis hinzufügen
            let contentPreis: HTMLParagraphElement = document.createElement("p");
            contentPreis.innerHTML = artikel[index].preis + "€";
            document.getElementById("artikel" + index)?.appendChild(contentPreis);

            switch (artikel[index].kategorie) {
                case "waffel":
                    let getContainerwaffel: HTMLElement = document.getElementById("waffel")!;
                    getContainerwaffel.appendChild(contentDiv);
                    break;
                case "eis":
                    let getContainereis: HTMLElement = document.getElementById("eis")!;
                    getContainereis.appendChild(contentDiv);
                    break;
                case "topping":

                    let getContainertopping: HTMLElement = document.getElementById("topping")!;
                    getContainertopping.appendChild(contentDiv);
                    break;
                default:
                    break;
            }
            //Button verknüpfen/hinzufügen
            let newButton: HTMLButtonElement = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";

            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.innerHTML = "Löschen";
            vorschauUpdate();

            //"Button" in Warenkorb
            //add Button
            newButton.addEventListener("click", zaehler.bind(artikel[index]));
            newButton.setAttribute("preis", artikel[index].preis.toString());
            newButton.setAttribute("name", artikel[index].name);
            newButton.setAttribute("img", artikel[index].img);
            newButton.setAttribute("kategorie", artikel[index].kategorie);

            document.getElementById("artikel" + index)?.appendChild(newButton);
            document.getElementById("artikel" + index)?.appendChild(newButton);

            //delete Button
            deleteButton.addEventListener("click", handleRemoveArticle.bind(artikel[index]));
            deleteButton.setAttribute("preis", artikel[index].preis.toString());
            deleteButton.setAttribute("name", artikel[index].name);
            deleteButton.setAttribute("img", artikel[index].img);
            deleteButton.setAttribute("kategorie", artikel[index].kategorie);

            document.getElementById("artikel" + index)?.appendChild(deleteButton);
            document.getElementById("artikel" + index)?.appendChild(deleteButton);
            vorschauUpdate();
        }
    }
    function handleRemoveArticle(this: Artikel, _event: Event): void {
        localStorage.removeItem(this.name);

        vorschauUpdate();

    }

    function zaehler(this: Artikel, _event: Event | undefined): void {
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
    function handleCategoryClick(this: HTMLElement, _click: MouseEvent): void {
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
    function waffel(): void {
        (<HTMLElement>document.getElementById("waffel")).style.display = "block";
        (<HTMLElement>document.getElementById("eis")).style.display = "none";
        (<HTMLElement>document.getElementById("topping")).style.display = "none";

        (<HTMLElement>document.getElementById("waffelbtn")).style.color = "grey";
        (<HTMLElement>document.getElementById("eisbtn")).style.color = "black";
        (<HTMLElement>document.getElementById("toppingbtn")).style.color = "black";
    }
    function eis(): void {
        (<HTMLElement>document.getElementById("eis")).style.display = "block";
        (<HTMLElement>document.getElementById("waffel")).style.display = "none";
        (<HTMLElement>document.getElementById("topping")).style.display = "none";

        (<HTMLElement>document.getElementById("eisbtn")).style.color = "grey";
        (<HTMLElement>document.getElementById("waffelbtn")).style.color = "black";
        (<HTMLElement>document.getElementById("toppingbtn")).style.color = "black";
    }
    function topping(): void {
        (<HTMLElement>document.getElementById("topping")).style.display = "block";
        (<HTMLElement>document.getElementById("waffel")).style.display = "none";
        (<HTMLElement>document.getElementById("eis")).style.display = "none";

        (<HTMLElement>document.getElementById("toppingbtn")).style.color = "grey";
        (<HTMLElement>document.getElementById("waffelbtn")).style.color = "black";
        (<HTMLElement>document.getElementById("eisbtn")).style.color = "black";
    }


}
