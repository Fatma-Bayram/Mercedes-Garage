
const searchInput = document.querySelector("#searchInput");
const clearButton = document.querySelector("#clearButton");
const carCards = document.querySelectorAll(".car-card");
const resultCount = document.querySelector("#resultCount");
const noResults = document.querySelector("#noResults");

if (searchInput && clearButton && carCards.length > 0) {

    function filterCars() {
        const searchValue = searchInput.value
            .trim()
            .toLocaleLowerCase("tr-TR");

        let visibleCount = 0;

        carCards.forEach(function(card) {
            const title = card.querySelector("h2")
                .textContent
                .toLocaleLowerCase("tr-TR");

            if (title.includes(searchValue)) {
                card.hidden = false;
                visibleCount++;
            } else {
                card.hidden = true;
            }
        });

        resultCount.textContent =
            visibleCount + " araç gösteriliyor.";

        noResults.hidden = visibleCount !== 0;
    }

    searchInput.addEventListener("input", filterCars);

    clearButton.addEventListener("click", function() {
        searchInput.value = "";
        filterCars();
        searchInput.focus();
    });

    filterCars();
}
