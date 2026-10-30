const firsthtml = `<header id="headerthing">
    <div class="left-side-nav">
        <img id="GameLogoImg"/>
    </div>
    <div class="right-side-nav"></div>
</header>

<div id="bgthing"></div>

<div id="mainBody">
    <h1 id="title">GET A J*B <span id="deluxe">(deluxe edition)</span></h1>
    <button id="startGame" class="start-game-btn">Start Game</button>
    <button id="LoadSaves" class="Load-gamesaves-btn">Load Saves</button>
</div>

<footer id="footerthing"></footer>`;

const secondadditionaryhtml = `<div id="bgthing"></div>
<br>
<h1 id="pageTitle">Pick Your Pet</h1>

<div id="gameOptions">
    <div class="game-option">
        <h2 class="career-title">Mochi ❤️</h2>
        <div class="game-icon career-icon">
            <img src="assets/icons/tuxedoCat.png" alt="Tuxedo Cat">
        </div>
        <button class="career-button">SELECT</button>
    </div>

    <div class="game-option">
        <h2 class="money-title">Nyan 🐈</h2>
        <div class="game-icon money-icon">
            <img src="assets/icons/calicoCat.png" alt="Calico Cat">
        </div>
        <button class="money-button">SELECT</button>
    </div>

    <div class="game-option">
        <h2 class="life-title">Evil Cat 🗑️</h2>
        <div class="game-icon life-icon">
            <img src="assets/icons/orangeCat.png" alt="Orange Cat">
        </div>
        <button class="life-button">SELECT</button>
    </div>
</div>`;

async function startup() {
    document.body.innerHTML = secondadditionaryhtml;
    
    const newBg = document.getElementById("bgthing");

    await newBg.animate(
        [
            { opacity: 1 },
            { opacity: 0.8 },
            { opacity: 0.6 },
            { opacity: 0.4 },
            { opacity: 0.2 },
            { opacity: 0 }
        ],
        {
            duration: 2000,
            iterations: 1,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );
}

async function startGame() {
    const bg = document.getElementById("bgthing");

    bg.style.cssText = `
        background: black;
        width: 100%;
        height: 100dvh;
        position: fixed;
        inset: 0;
        z-index: 100;
        opacity: 0;
    `;

    await bg.animate(
        [
            { opacity: 0 },
            { opacity: 0.2 },
            { opacity: 0.4 },
            { opacity: 0.6 },
            { opacity: 0.8 },
            { opacity: 1 }
        ],
        {
            duration: 1000,
            iterations: 1,
            easing: "ease-in-out",
            fill: "forwards"
        }
    ).finished;

    await startup();
}

document.getElementById("startGame").addEventListener("click", startGame);