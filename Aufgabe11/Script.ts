namespace A11 {


    let formData: FormData;
    let sendButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("send"));
    sendButton.addEventListener("click", sendButtonHandler);
    let getButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("get"));
    getButton.addEventListener("click", getButtonHandler);

    async function sendButtonHandler(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100/send";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }

    async function getButtonHandler(): Promise<void> {
        //formData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100/get";
        let response: Response = await fetch(url);
        let resp2: string = await response.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = resp2;
    }
}