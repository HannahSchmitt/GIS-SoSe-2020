"use strict";
var artikel;
(function (artikel) {
    function getLocalStorage() {
        for (let key in localStorage) {
            console.log(localStorage.getItem(key));
            let item = JSON.parse(localStorage.getItem(key));
            console.log(item._name);
        }
    }
    document.addEventListener("DOMContentLoaded", getLocalStorage);
    function createDynamicContent() {
        for (let i = 0; i <= countTo - 1; i++) {
            //Div erstellen
            let newDiv = document.createElement("div");
            document.getElementsByClassName("warenliste").appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);
            //IMG IN DIV PACKEN
            let imgElement = document.createElement("img");
            imgElement.src = localStorage.getItem("item-image" + i);
            newDiv.appendChild(imgElement);
            console.log(imgElement);
            //NAME
            let name = document.createElement("p");
            name.innerHTML = localStorage.getItem("item-name" + i);
            newDiv.appendChild(name);
            //PREIS
            let price = document.createElement("p");
            price.innerHTML = localStorage.getItem("item-price" + i);
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            //BUTTON
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Löschen";
            newDiv.appendChild(kaufen);
            kaufen.addEventListener("click", handleRemoveArticle);
            //Gesamtpreis berechnen
            total = total + parseFloat(price.innerHTML);
            pTotal.innerHTML = total.toFixed(2) + "€";
            setGesamtpreis();
        }
        function handleRemoveArticle(_event) {
            //Gesampreis reduzieren
            let preisString = _event.currentTarget.parentElement.getAttribute("preis");
            gesamtpreis = gesamtpreis - parseFloat(preisString);
            pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
            setGesamtpreis();
            //Artikel Löschen
            (_event.currentTarget.parentElement).remove();
        }
        removeAll();
    }
    //Gesamtpreis in Header plazieren
    function setGesamtpreis() {
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
    }
    function removeAll() {
        let remButton = document.getElementById("liRemoveAll");
        remButton.addEventListener("click", handleRemoveAll);
    }
    function handleRemoveAll(_event) {
        for (let i = 0; i <= countTo - 1; i++) {
            try {
                document.getElementById("divId" + i).remove();
            }
            catch (error) {
                console.log(error);
                console.log("Artikel wurde zuvor von Hand gelöscht und kann nicht mehr gefunden werden");
            }
            pGesamtpreis.innerHTML = 0 + "€";
            setGesamtpreis();
            localStorage.clear();
        }
    }
})(artikel || (artikel = {}));
//# sourceMappingURL=ScriptWarenkorb.js.map