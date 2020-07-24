namespace Eismanufaktur {

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    //let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
    //buttonHtml.addEventListener("click", handleClickHtml);

    window.addEventListener("load", init);
    
    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        
        createButtons();
        console.log(localStorage);
        setGesamtpreis();
    }

    function createButtons(): void {
        let getData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
        getData.addEventListener("click", getButtonfunction);
        //let url: string = "Data.json";
    }

    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + " € ";
    }

    let formData: FormData = new FormData;
    async function getButtonfunction(): Promise<void> {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/get";
        let url: string = "https://aufgabe8gis.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response: Response = await fetch(url);
        let response2: string = await response.text();
        (<HTMLDivElement>document.getElementById("serverResponse")).innerHTML = response2;
        console.log("response");
        }
    }