// images
const data = [
    {
        id: 1,
        title: "Plan 1",
        text: "Texto de ejemplo para la imagen 1",
        imgSrc: "img/img1.jpg",
    },
    {
        id: 2,
        title: "Plan 2",
        text: "Texto de ejemplo para la imagen 2",
        imgSrc: "img/img2.jpg",
    },
    {
        id: 3,
        title: "Plan 3",
        text: "Texto de ejemplo para la imagen 3",
        imgSrc: "img/img3.jpg",
    },
    {
        id: 4,
        title: "Plan 4",
        text: "Texto de ejemplo para la imagen 4",
        imgSrc: "img/img4.jpg",
    },
    {
        id: 5,
        title: "Plan 5",
        text: "Texto de ejemplo para la imagen 5",
        imgSrc: "img/img5.jpg",
    },
];

// elements
let slider = document.querySelector(".slider-content");
let sliderTitle = document.querySelector(".left-texts__title");
let sliderParagraph = document.querySelector(".left-texts__paragraph");

let cards = document.querySelectorAll(".figure");

// current position
let position = 0;

// controls
const prevBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

// load data
window.addEventListener("DOMContentLoaded", () => {
    // imagen inicial
   updateCards(position);
   updateSlider(position);
});

prevBtn.addEventListener("click", () => {
    showPrev(position);
});

nextBtn.addEventListener("click", () => {
    showNext(position);
});

function updateCards(activeIndex) {
    currentBackground = data[activeIndex].title;
    cardList = data
        .filter((card) => {
            return card.title !== currentBackground;
        })
        .sort((a, b) => a.id - b.id);

    cards.forEach((card, indice) => {
        // image
        card.children[0].src = cardList[indice].imgSrc;

        // texts
        card.children[1].innerText = cardList[indice].title;
        card.children[2].innerText = cardList[indice].text;
    });
}

function updateSlider(index) {
    slider.style.background = `url(${data[position].imgSrc})`;
    sliderTitle.innerText = data[position].title;
    sliderParagraph.innerText = data[position].text;
}

function showNext(currentPosition) {
    if (currentPosition + 1 > data.length - 1) {
        position = 0;
    } else {
        position++;
    }
    updateCards(position);
    updateSlider(position);
}
function showPrev(currentPosition) {
    if (currentPosition - 1 < 0) {
        position = data.length - 1;
    } else {
        position--;
    }
    updateCards(position);
    updateSlider(position);
}
