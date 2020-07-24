"use strict";
var Eismanufaktur;
(function (Eismanufaktur) {
    //let contentDiv: HTMLDivElement;
    let pGesamtpreis;
    let gesamtPreis;
    //let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
    //buttonHtml.addEventListener("click", handleClickHtml);
    window.addEventListener("load", init);
    function init(_event) {
        //contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
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
        //delete all button
        let deleteData = document.getElementById("delete");
        deleteData.addEventListener("click", deleteDatafunction);
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + " € ";
    }
    let formData = new FormData;
    async function getButtonfunction() {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/get";
        let url = "https://aufgabe8gis.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("serverResponse").innerHTML = response2;
        console.log("response");
    }
    async function deleteDatafunction(_click) {
        //let url: string = "http://localhost:8100";
        let url = "https://aufgabe8gis.herokuapp.com/gesamtLoeschen";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        //console.log(url);
        let response = await fetch(url);
        console.log(response);
        //text.innerHTML = "Daten wurden gelöscht";
    }
})(Eismanufaktur || (Eismanufaktur = {}));
//# sourceMappingURL=ScriptVerkäufer.js.map