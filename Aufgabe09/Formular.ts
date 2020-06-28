namespace L09_Formular {

    let buttonJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJson");
    buttonJson.addEventListener("click", handleClickJson);

    let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", handleClickHtml);

    async function handleClickHtml(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let urlServer: string = "https://aufgabe8gis.herokuapp.com";
        urlServer = urlServer + "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        urlServer += "?" + query.toString();

        let response: Response = await fetch(urlServer);
        let rückgabeText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement>document.getElementById("serverRückgabe");
        serverResponse.innerHTML = rückgabeText;
    }

    async function handleClickJson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let urlServer: string = "https://aufgabe8gis.herokuapp.com";
        urlServer = urlServer + "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        urlServer += "?" + query.toString();

        let response: Response = await fetch(urlServer);
        let rückgabeText: string = await response.json();
        console.log(rückgabeText);
    }

}

