namespace Eismanufaktur {


    //let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
    //buttonHtml.addEventListener("click", handleClickHtml);

    window.addEventListener("load", init);

    function init(_event: Event): void {
        createButtons();
    }

    function createButtons(): void {
        let getData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
        getData.addEventListener("click", getButtonfunction);
        //let url: string = "Data.json";
        //delete all button
        document.getElementById("gesamtLoeschen")?.addEventListener("click", deleteDatafunction);


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
    async function deleteDatafunction(_click: MouseEvent): Promise <void> { 
        //let url: string = "http://localhost:8100";
        let url: string = "https://aufgabe8gis.herokuapp.com/gesamtLoeschen";
        let formData: FormData = new FormData(document.forms[0]);
        
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        
        
        url += "?" + query.toString();
        //console.log(url);
        
        let response: Response = await fetch(url);
        console.log(response);
        //text.innerHTML = "Daten wurden gelöscht";
        }
}