namespace Eismanufaktur {

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;
    let warenkorbLoeschen: HTMLParagraphElement;

    let sendData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    sendData.addEventListener("click", sendButtonfunction);

    window.addEventListener("load", init);
    
    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        warenkorbLoeschen = <HTMLParagraphElement>document.querySelector("#gesamtLoeschen");
        warenkorbLoeschen.addEventListener("click", handleRemoveAll);
        update();
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        let gesamtPreisDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("countPrice");
        let gesamtPreisText: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
        gesamtPreisDiv.appendChild(gesamtPreisText).innerHTML = "gesamtPreis: " + gesamtPreis.toFixed(2) + "€";
        
        console.log(localStorage);
    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let articleJson: string = <string>localStorage.getItem(key);

            // tslint:disable-next-line: no-any
            let item: any = <any>JSON.parse(articleJson);

            gesamtPreis += item.preis;
            createDynamicContent(item);
            console.log(gesamtPreis);
        }
    }
    let formData: FormData;

    async function sendButtonfunction(): Promise<void> {
        console.log("Hallöle");
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/send";
        let url: string = "https://aufgabe8gis.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }

    // tslint:disable-next-line: no-any
    function createDynamicContent(_inputArticle: any): void {
        //Div erstellen
        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);

        //IMG IN DIV PACKEN
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = _inputArticle.img;
        newDiv.appendChild(imgElement);
        console.log(imgElement);

        //NAME
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);

        //PREIS
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);

        //BUTTON
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }

    // tslint:disable-next-line: no-any
    function handleRemoveArticle(this: any, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }

    /*function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + " € ";
    }*/

    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
     }
}