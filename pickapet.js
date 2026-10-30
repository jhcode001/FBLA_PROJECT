// Page title
const pageTitle = document.createElement("h1");
pageTitle.id = "pageTitle";
pageTitle.textContent = "Pick Your Pet";

document.body.appendChild(pageTitle);


const gameOptions = document.createElement("div");
gameOptions.id = "gameOptions";

document.body.appendChild(gameOptions);


const pets = [
    {
        name: "Mochi ❤️",
        titleClass: "career-title",
        iconClass: "career-icon",
        buttonClass: "career-button",
        image: "assets/icons/tuxedoCat.png",
        alt: "Tuxedo Cat"
    },
    {
        name: "Nyan 🐈",
        titleClass: "money-title",
        iconClass: "money-icon",
        buttonClass: "money-button",
        image: "assets/icons/calicoCat.png",
        alt: "Calico Cat"
    },
    {
        name: "Evil Cat 🗑️",
        titleClass: "life-title",
        iconClass: "life-icon",
        buttonClass: "life-button",
        image: "assets/icons/orangeCat.png",
        alt: "Orange Cat"
    }
];


pets.forEach(function(pet) {

    const gameOption = document.createElement("div");
    gameOption.className = "game-option";

    const title = document.createElement("h2");
    title.className = pet.titleClass;
    title.textContent = pet.name;

    const gameIcon = document.createElement("div");
    gameIcon.className = "game-icon " + pet.iconClass;

    const img = document.createElement("img");
    img.src = pet.image;
    img.alt = pet.alt;

    const button = document.createElement("button");
    button.className = pet.buttonClass;
    button.textContent = "SELECT";

    gameIcon.appendChild(img);

    gameOption.appendChild(title);
    gameOption.appendChild(gameIcon);
    gameOption.appendChild(button);

    gameOptions.appendChild(gameOption);
});
