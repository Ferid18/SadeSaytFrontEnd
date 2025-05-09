const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if (imageItem - (4 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i]
                .computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
        }
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .movie-list-title,.movie-list-item,.navbar,.toggle,.toggle-ball,.movie-filter-list-select,.sidebar,.sidebar i,.movie-list-filter select"
);
ball.addEventListener("click", function() {
    items.forEach((item) => item.classList.toggle("active")); 
});

