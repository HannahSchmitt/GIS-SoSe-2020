"use strict";
var Eismanufaktur;
(function (Eismanufaktur) {
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    //let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
    //buttonHtml.addEventListener("click", handleClickHtml);
    window.addEventListener("load", init);
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        createButtons();
        console.log(localStorage);
        setGesamtpreis();
    }
    function createButtons() {
        let getData = document.getElementById("get");
        getData.addEventListener("click", getButtonfunction);
        //let url: string = "Data.json";
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + " € ";
    }
    let formData = new FormData;
    async function getButtonfunction() {
        formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100/get";
        // let url: string = "https://aufgabe8gis.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("serverResponse").innerHTML = response2;
        console.log("response");
    }
})(Eismanufaktur || (Eismanufaktur = {}));
//# sourceMappingURL=ScriptVerkäufer.js.map