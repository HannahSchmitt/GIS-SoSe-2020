namespace Aufgabe08 {
    let anmelden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    anmelden.addEventListener("click", communicate);

    async function communicate(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis-example.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
}