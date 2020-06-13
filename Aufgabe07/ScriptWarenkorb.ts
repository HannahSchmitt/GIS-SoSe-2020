namespace artikel {

    function getLocalStorage(): void {
        for (let key in localStorage) {
            console.log(localStorage.getItem(key));
            let item: Artikel = JSON.parse(localStorage.getItem(key));
            console.log(item._name);

        }
    }

    document.addEventListener("DOMContentLoaded", getLocalStorage);
    function createDynamicContent(): void {
        for (let i: number = 0; i <= countTo - 1; i++) {

            //Div erstellen
            let newDiv: HTMLDivElement = document.createElement("div");
            (<HTMLElement>document.getElementsByClassName("warenliste")).appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);

            //IMG IN DIV PACKEN
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = localStorage.getItem("item-image" + i)!;
            newDiv.appendChild(imgElement);
            console.log(imgElement);

            //NAME
            let name: HTMLParagraphElement = document.createElement("p");
            name.innerHTML = localStorage.getItem("item-name" + i)!;
            newDiv.appendChild(name);

            //PREIS
            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = localStorage.getItem("item-price" + i)!;
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);

            //BUTTON
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Löschen";
            newDiv.appendChild(kaufen);
            kaufen.addEventListener("click", handleRemoveArticle);

            //Gesamtpreis berechnen
            total = total + parseFloat(price.innerHTML);
            pTotal.innerHTML = total.toFixed(2) + "€";
            setGesamtpreis();
        }
        function handleRemoveArticle(_event: Event): void {
            //Gesampreis reduzieren
            let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
            gesamtpreis = gesamtpreis - parseFloat(preisString);
            pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
            setGesamtpreis();

            //Artikel Löschen
            ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        }
        removeAll();
    }

    //Gesamtpreis in Header plazieren
    function setGesamtpreis(): void {
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
    }


    function removeAll(): void {
        let remButton: HTMLDListElement = (<HTMLDListElement>document.getElementById("liRemoveAll"));
        remButton.addEventListener("click", handleRemoveAll);
    }

    function handleRemoveAll(_event: Event): void {
        for (let i: number = 0; i <= countTo - 1; i++) {
            try {
                (<HTMLDivElement>document.getElementById("divId" + i)).remove();
            } catch (error) {
                console.log(error);
                console.log("Artikel wurde zuvor von Hand gelöscht und kann nicht mehr gefunden werden");
            }
            pGesamtpreis.innerHTML = 0 + "€";
            setGesamtpreis();
            localStorage.clear();
        }


    }
}