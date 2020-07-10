"use strict";
var A11;
(function (A11) {
    let formData;
    let sendButton = document.getElementById("send");
    sendButton.addEventListener("click", sendButtonHandler);
    let getButton = document.getElementById("get");
    getButton.addEventListener("click", getButtonHandler);
    async function sendButtonHandler() {
        formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100/send";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
    async function getButtonHandler() {
        //formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100/get";
        let response = await fetch(url);
        let resp2 = await response.text();
        document.getElementById("output").innerHTML = resp2;
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=Script.js.map