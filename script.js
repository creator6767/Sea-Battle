/* =========================================================
   SEA BATTLE
   Full version
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const SIZE = 10;

const TOTAL_SHIPS = 7;


/* =========================================================
   SHIPS
========================================================= */

const SHIP_TYPES = [
    {
        name: "battleship",
        size: 4,
        emoji: "🚢"
    },

    {
        name: "cruiser",
        size: 3,
        emoji: "⛴️"
    },

    {
        name: "cruiser",
        size: 3,
        emoji: "🚤"
    },

    {
        name: "destroyer",
        size: 2,
        emoji: "🛥️"
    },

    {
        name: "destroyer",
        size: 2,
        emoji: "🛥️"
    },

    {
        name: "destroyer",
        size: 2,
        emoji: "🛥️"
    },

    {
        name: "boat",
        size: 1,
        emoji: "🚣"
    }
];


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    ru: {

        title: "МОРСКОЙ БОЙ",
        subtitle: "Эпическое сражение на море",

        language: "Язык",
        mode: "Режим",

        vsAI: "🤖 Против ИИ",
        twoPlayers: "👥 Два игрока",

        difficulty: "Сложность",

        easy: "Легко",
        medium: "Средне",
        hard: "Сложно",

        moves: "Ходы",
        hits: "Попадания",
        enemyHits: "Попадания врага",

        placementTitle: "⚓ Расстановка флота",
        placementDescription:
            "Выберите корабль и нажмите на поле, чтобы его поставить.",

        direction: "Направление",

        rotate: "Повернуть",
        random: "Случайно",
        clear: "Очистить",
        ready: "Готов",

        yourFleet: "Ваш флот",
        enemyFleet: "Флот противника",

        player1: "Игрок 1",
        player2: "Игрок 2",
        computer: "Компьютер",

        selectShip:
            "Сначала выберите корабль.",

        placed:
            "Корабль установлен.",

        invalidPlacement:
            "Сюда корабль поставить нельзя.",

        allPlaced:
            "Все корабли установлены. Нажмите «Готов».",

        yourTurn:
            "Ваш ход! Выберите клетку противника.",

        enemyTurn:
            "Ход противника...",

        hit:
            "💥 Попадание! Вы стреляете ещё раз.",

        miss:
            "🌊 Промах! Теперь ход противника.",

        aiHit:
            "💥 Компьютер попал!",

        aiMiss:
            "🌊 Компьютер промахнулся!",

        destroyed:
            "☠️ Корабль уничтожен!",

        thinking:
            "🤖 ИИ думает...",

        continue:
            "Продолжить",

        newGame:
            "Новая игра",

        playAgain:
            "Играть снова",

        passDevice:
            "Передайте устройство",

        passText:
            "Передайте устройство следующему игроку.",

        victory:
            "ПОБЕДА!",

        defeat:
            "ПОРАЖЕНИЕ",

        victoryText:
            "Вы уничтожили весь флот противника!",

        defeatText:
            "Ваш флот полностью уничтожен.",

        battleship:
            "Линкор",

        cruiser:
            "Крейсер",

        destroyer:
            "Эсминец",

        boat:
            "Катер"
    },


    en: {

        title: "SEA BATTLE",
        subtitle: "Epic battle on the ocean",

        language: "Language",
        mode: "Mode",

        vsAI: "🤖 vs AI",
        twoPlayers: "👥 Two Players",

        difficulty: "Difficulty",

        easy: "Easy",
        medium: "Medium",
        hard: "Hard",

        moves: "Moves",
        hits: "Hits",
        enemyHits: "Enemy hits",

        placementTitle: "⚓ Fleet Placement",
        placementDescription:
            "Select a ship and click the board to place it.",

        direction: "Direction",

        rotate: "Rotate",
        random: "Random",
        clear: "Clear",
        ready: "Ready",

        yourFleet: "Your Fleet",
        enemyFleet: "Enemy Fleet",

        player1: "Player 1",
        player2: "Player 2",
        computer: "Computer",

        selectShip:
            "Select a ship first.",

        placed:
            "Ship placed.",

        invalidPlacement:
            "You cannot place the ship here.",

        allPlaced:
            "All ships are placed. Press Ready.",

        yourTurn:
            "Your turn! Choose a cell on the enemy board.",

        enemyTurn:
            "Enemy turn...",

        hit:
            "💥 Hit! You get another shot.",

        miss:
            "🌊 Miss! Enemy turn.",

        aiHit:
            "💥 The computer hit!",

        aiMiss:
            "🌊 The computer missed!",

        destroyed:
            "☠️ Ship destroyed!",

        thinking:
            "🤖 AI is thinking...",

        continue:
            "Continue",

        newGame:
            "New Game",

        playAgain:
            "Play Again",

        passDevice:
            "Pass the device",

        passText:
            "Pass the device to the next player.",

        victory:
            "VICTORY!",

        defeat:
            "DEFEAT",

        victoryText:
            "You destroyed the entire enemy fleet!",

        defeatText:
            "Your entire fleet has been destroyed.",

        battleship:
            "Battleship",

        cruiser:
            "Cruiser",

        destroyer:
            "Destroyer",

        boat:
            "Boat"
    },


    de: {

        title: "SCHLACHTSCHIFFE",
        subtitle: "Epische Schlacht auf dem Meer",

        language: "Sprache",
        mode: "Modus",

        vsAI: "🤖 Gegen KI",
        twoPlayers: "👥 Zwei Spieler",

        difficulty: "Schwierigkeit",

        easy: "Einfach",
        medium: "Mittel",
        hard: "Schwer",

        moves: "Züge",
        hits: "Treffer",
        enemyHits: "Gegnerische Treffer",

        placementTitle: "⚓ Flottenaufstellung",
        placementDescription:
            "Wähle ein Schiff und klicke auf das Spielfeld.",

        direction: "Richtung",

        rotate: "Drehen",
        random: "Zufällig",
        clear: "Löschen",
        ready: "Bereit",

        yourFleet: "Deine Flotte",
        enemyFleet: "Gegnerische Flotte",

        player1: "Spieler 1",
        player2: "Spieler 2",
        computer: "Computer",

        selectShip:
            "Wähle zuerst ein Schiff.",

        placed:
            "Schiff platziert.",

        invalidPlacement:
            "Hier kann das Schiff nicht platziert werden.",

        allPlaced:
            "Alle Schiffe sind platziert. Drücke Bereit.",

        yourTurn:
            "Du bist dran! Wähle ein Feld des Gegners.",

        enemyTurn:
            "Der Gegner ist dran...",

        hit:
            "💥 Treffer! Du bist noch einmal dran.",

        miss:
            "🌊 Daneben! Der Gegner ist dran.",

        aiHit:
            "💥 Der Computer hat getroffen!",

        aiMiss:
            "🌊 Der Computer hat verfehlt!",

        destroyed:
            "☠️ Schiff zerstört!",

        thinking:
            "🤖 Die KI denkt nach...",

        continue:
            "Weiter",

        newGame:
            "Neues Spiel",

        playAgain:
            "Nochmal spielen",

        passDevice:
            "Gerät übergeben",

        passText:
            "Übergib das Gerät an den nächsten Spieler.",

        victory:
            "SIEG!",

        defeat:
            "NIEDERLAGE",

        victoryText:
            "Du hast die gesamte gegnerische Flotte zerstört!",

        defeatText:
            "Deine gesamte Flotte wurde zerstört.",

        battleship:
            "Schlachtschiff",

        cruiser:
            "Kreuzer",

        destroyer:
            "Zerstörer",

        boat:
            "Boot"
    }

};


/* =========================================================
   DOM
========================================================= */

const languageSelect =
    document.getElementById("languageSelect");

const modeSelect =
    document.getElementById("modeSelect");

const difficultySelect =
    document.getElementById("difficultySelect");

const difficultyCard =
    document.getElementById("difficultyCard");

const setupPanel =
    document.getElementById("setupPanel");

const placementFleet =
    document.getElementById("placementFleet");

const rotateButton =
    document.getElementById("rotateButton");

const randomButton =
    document.getElementById("randomButton");

const clearButton =
    document.getElementById("clearButton");

const readyButton =
    document.getElementById("readyButton");

const orientationText =
    document.getElementById("orientationText");

const placementDescription =
    document.getElementById("placementDescription");

const playerBoardElement =
    document.getElementById("playerBoard");

const enemyBoardElement =
    document.getElementById("enemyBoard");

const enemyCard =
    document.getElementById("enemyCard");

const boardsContainer =
    document.getElementById("boardsContainer");

const fleetPanel =
    document.getElementById("fleetPanel");

const fleetList =
    document.getElementById("fleetList");

const fleetTitle =
    document.getElementById("fleetTitle");

const statusMessage =
    document.getElementById("statusMessage");

const turnText =
    document.getElementById("turnText");

const movesValue =
    document.getElementById("movesValue");

const hitsValue =
    document.getElementById("hitsValue");

const enemyHitsValue =
    document.getElementById("enemyHitsValue");

const leftBoardTitle =
    document.getElementById("leftBoardTitle");

const leftBoardSubtitle =
    document.getElementById("leftBoardSubtitle");

const rightBoardTitle =
    document.getElementById("rightBoardTitle");

const rightBoardSubtitle =
    document.getElementById("rightBoardSubtitle");

const leftFleetCounter =
    document.getElementById("leftFleetCounter");

const rightFleetCounter =
    document.getElementById("rightFleetCounter");

const newGameButton =
    document.getElementById("newGameButton");

const passScreen =
    document.getElementById("passScreen");

const passTitle =
    document.getElementById("passTitle");

const passText =
    document.getElementById("passText");

const continueButton =
    document.getElementById("continueButton");

const winScreen =
    document.getElementById("winScreen");

const winnerIcon =
    document.getElementById("winnerIcon");

const winnerTitle =
    document.getElementById("winnerTitle");

const winnerText =
    document.getElementById("winnerText");

const restartButton =
    document.getElementById("restartButton");


/* =========================================================
   GAME STATE
========================================================= */

let language = "ru";

let mode = "ai";

let difficulty = "easy";

let phase = "placement";

let activePlayer = 1;

let gameOver = false;

let waitingForAI = false;


/* =========================================================
   BOARDS
========================================================= */

let player1Board;

let player2Board;


/* =========================================================
   SHIPS
========================================================= */

let player1Ships;

let player2Ships;


/* =========================================================
   PLACEMENT
========================================================= */

let placementPlayer = 1;

let selectedShipId = null;

let horizontal = true;


/* =========================================================
   STATS
========================================================= */

let moves = 0;

let hits = 0;

let enemyHits = 0;


/* =========================================================
   AI MEMORY
========================================================= */

let aiTargets = [];

let aiHitTargets = [];


/* =========================================================
   HELPERS
========================================================= */

function t(key) {

    return (
        translations[language]?.[key] ||
        translations.ru[key] ||
        key
    );
}


/* =========================================================
   EMPTY BOARD
========================================================= */

function createBoard() {

    const board = [];

    for (let row = 0; row < SIZE; row++) {

        board[row] = [];

        for (let col = 0; col < SIZE; col++) {

            board[row][col] = {

                state: "empty",

                shipId: null
            };
        }
    }

    return board;
}


/* =========================================================
   CREATE SHIP LIST
========================================================= */

function createShips() {

    return SHIP_TYPES.map(
        ship => ({
            ...ship,
            placed: false,
            hits: 0,
            sunk: false,
            positions: []
        })
    );
}


/* =========================================================
   CHECK PLACEMENT
========================================================= */

function canPlaceShip(
    board,
    row,
    col,
    size,
    isHorizontal,
    ignoredShipId = null
) {

    for (let i = 0; i < size; i++) {

        const newRow =
            isHorizontal
                ? row
                : row + i;

        const newCol =
            isHorizontal
                ? col + i
                : col;


        if (
            newRow < 0 ||
            newRow >= SIZE ||
            newCol < 0 ||
            newCol >= SIZE
        ) {

            return false;
        }


        const cell =
            board[newRow][newCol];


        if (
            cell.shipId !== null &&
            cell.shipId !== ignoredShipId
        ) {

            return false;
        }


        for (
            let r = newRow - 1;
            r <= newRow + 1;
            r++
        ) {

            for (
                let c = newCol - 1;
                c <= newCol + 1;
                c++
            ) {

                if (
                    r < 0 ||
                    r >= SIZE ||
                    c < 0 ||
                    c >= SIZE
                ) {

                    continue;
                }


                const nearby =
                    board[r][c];


                if (
                    nearby.shipId !== null &&
                    nearby.shipId !== ignoredShipId
                ) {

                    return false;
                }
            }
        }
    }

    return true;
}


/* =========================================================
   GET POSITIONS
========================================================= */

function getShipPositions(
    row,
    col,
    size,
    isHorizontal
) {

    const positions = [];

    for (let i = 0; i < size; i++) {

        positions.push({

            row:
                isHorizontal
                    ? row
                    : row + i,

            col:
                isHorizontal
                    ? col + i
                    : col
        });
    }

    return positions;
}


/* =========================================================
   REMOVE SHIP FROM BOARD
========================================================= */

function removeShip(
    board,
    ships,
    shipId
) {

    const ship =
        ships[shipId];

    if (!ship) {
        return;
    }


    ship.positions.forEach(
        position => {

            board[
                position.row
            ][
                position.col
            ].shipId = null;

            board[
                position.row
            ][
                position.col
            ].state = "empty";
        }
    );


    ship.positions = [];

    ship.placed = false;

    ship.hits = 0;

    ship.sunk = false;
}


/* =========================================================
   PLACE SHIP
========================================================= */

function placeShipAt(
    board,
    ships,
    shipId,
    row,
    col
) {

    const ship =
        ships[shipId];


    if (!ship) {
        return false;
    }


    const valid =
        canPlaceShip(
            board,
            row,
            col,
            ship.size,
            horizontal,
            ship.placed
                ? shipId
                : null
        );


    if (!valid) {

        setStatus(
            t("invalidPlacement")
        );

        return false;
    }


    if (ship.placed) {

        removeShip(
            board,
            ships,
            shipId
        );
    }


    const positions =
        getShipPositions(
            row,
            col,
            ship.size,
            horizontal
        );


    positions.forEach(
        position => {

            board[
                position.row
            ][
                position.col
            ].shipId = shipId;
        }
    );


    ship.positions =
        positions;

    ship.placed = true;

    ship.hits = 0;

    ship.sunk = false;


    selectedShipId = null;


    setStatus(
        t("placed")
    );


    renderPlacement();

    updateReadyButton();

    return true;
}


/* =========================================================
   SELECT SHIP
========================================================= */

function selectShip(shipId) {

    const ships =
        getPlacementShips();

    const ship =
        ships[shipId];


    if (!ship) {
        return;
    }


    /*
        Если корабль уже поставлен,
        снимаем его с поля и позволяем
        поставить заново.
    */

    if (ship.placed) {

        removeShip(
            getPlacementBoard(),
            ships,
            shipId
        );
    }


    selectedShipId =
        shipId;


    setStatus(
        `${ship.emoji} ${t(ship.name)}`
    );


    renderPlacement();

    updateReadyButton();
}


/* =========================================================
   PLACEMENT BOARD
========================================================= */

function getPlacementBoard() {

    return placementPlayer === 1
        ? player1Board
        : player2Board;
}


function getPlacementShips() {

    return placementPlayer === 1
        ? player1Ships
        : player2Ships;
}


/* =========================================================
   ALL SHIPS PLACED
========================================================= */

function allShipsPlaced(
    ships
) {

    return ships.every(
        ship => ship.placed
    );
}


/* =========================================================
   RANDOM PLACEMENT
========================================================= */

function randomPlacement(
    board,
    ships
) {

    clearBoard(
        board,
        ships
    );


    ships.forEach(
        (ship, index) => {

            let placed = false;

            let attempts = 0;


            while (
                !placed &&
                attempts < 10000
            ) {

                attempts++;


                const isHorizontal =
                    Math.random() < 0.5;


                const row =
                    Math.floor(
                        Math.random() * SIZE
                    );


                const col =
                    Math.floor(
                        Math.random() * SIZE
                    );


                if (
                    canPlaceShip(
                        board,
                        row,
                        col,
                        ship.size,
                        isHorizontal
                    )
                ) {

                    const positions =
                        getShipPositions(
                            row,
                            col,
                            ship.size,
                            isHorizontal
                        );


                    positions.forEach(
                        position => {

                            board[
                                position.row
                            ][
                                position.col
                            ].shipId =
                                index;
                        }
                    );


                    ship.positions =
                        positions;

                    ship.placed =
                        true;

                    placed = true;
                }
            }
        }
    );


    selectedShipId = null;

    renderPlacement();

    updateReadyButton();

    setStatus(
        t("allPlaced")
    );
}


/* =========================================================
   CLEAR BOARD
========================================================= */

function clearBoard(
    board,
    ships
) {

    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            board[row][col] = {

                state: "empty",

                shipId: null
            };
        }
    }


    ships.forEach(
        ship => {

            ship.placed = false;

            ship.hits = 0;

            ship.sunk = false;

            ship.positions = [];
        }
    );


    selectedShipId = null;
}


/* =========================================================
   RENDER PLACEMENT
========================================================= */

function renderPlacement() {

    const board =
        getPlacementBoard();


    playerBoardElement.innerHTML = "";


    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            const cell =
                document.createElement("div");


            cell.className = "cell";


            cell.dataset.row =
                row;

            cell.dataset.col =
                col;


            const data =
                board[row][col];


            if (
                data.shipId !== null
            ) {

                cell.classList.add(
                    "ship"
                );
            }


            cell.addEventListener(
                "mouseenter",
                () => {

                    showPreview(
                        row,
                        col
                    );
                }
            );


            cell.addEventListener(
                "mouseleave",
                clearPreview
            );


            cell.addEventListener(
                "click",
                () => {

                    if (
                        selectedShipId === null
                    ) {

                        setStatus(
                            t("selectShip")
                        );

                        return;
                    }


                    placeShipAt(
                        board,
                        getPlacementShips(),
                        selectedShipId,
                        row,
                        col
                    );
                }
            );


            playerBoardElement.appendChild(
                cell
            );
        }
    }


    renderPlacementFleet();

    updatePlacementCounter();
}


/* =========================================================
   PREVIEW
========================================================= */

function showPreview(
    row,
    col
) {

    if (
        selectedShipId === null
    ) {

        return;
    }


    clearPreview();


    const board =
        getPlacementBoard();

    const ships =
        getPlacementShips();

    const ship =
        ships[selectedShipId];


    if (!ship) {
        return;
    }


    const valid =
        canPlaceShip(
            board,
            row,
            col,
            ship.size,
            horizontal,
            ship.placed
                ? ship.id
                : null
        );


    const positions =
        getShipPositions(
            row,
            col,
            ship.size,
            horizontal
        );


    positions.forEach(
        position => {

            if (
                position.row < 0 ||
                position.row >= SIZE ||
                position.col < 0 ||
                position.col >= SIZE
            ) {

                return;
            }


            const cell =
                playerBoardElement
                    .children[
                        position.row * SIZE +
                        position.col
                    ];


            if (!cell) {
                return;
            }


            cell.classList.add(
                valid
                    ? "preview-valid"
                    : "preview-invalid"
            );
        }
    );
}


/* =========================================================
   CLEAR PREVIEW
========================================================= */

function clearPreview() {

    document
        .querySelectorAll(
            ".preview-valid, .preview-invalid"
        )
        .forEach(
            cell => {

                cell.classList.remove(
                    "preview-valid",
                    "preview-invalid"
                );
            }
        );
}


/* =========================================================
   PLACEMENT FLEET UI
========================================================= */

function renderPlacementFleet() {

    const ships =
        getPlacementShips();


    placementFleet.innerHTML = "";


    ships.forEach(
        (ship, index) => {

            const card =
                document.createElement("div");


            card.className =
                "ship-selection";


            if (
                selectedShipId === index
            ) {

                card.classList.add(
                    "selected"
                );
            }


            if (
                ship.placed
            ) {

                card.classList.add(
                    "placed"
                );
            }


            card.innerHTML = `

                <div class="ship-top">

                    <span class="emoji">
                        ${ship.emoji}
                    </span>

                    <span
                        class="ship-status
                        ${ship.placed
                            ? "placed"
                            : ""}"
                    >
                        ${
                            ship.placed
                                ? "✓"
                                : ship.size
                        }
                    </span>

                </div>

                <strong>
                    ${t(ship.name)}
                </strong>

                <small>
                    ${ship.size} ${language === "ru"
                        ? "клетки"
                        : "cells"}
                </small>
            `;


            card.addEventListener(
                "click",
                () => {

                    selectShip(index);
                }
            );


            placementFleet.appendChild(
                card
            );
        }
    );
}


/* =========================================================
   COUNTER
========================================================= */

function updatePlacementCounter() {

    const ships =
        getPlacementShips();


    const placed =
        ships.filter(
            ship => ship.placed
        ).length;


    leftFleetCounter.textContent =
        `${placed} / ${TOTAL_SHIPS}`;
}


/* =========================================================
   READY BUTTON
========================================================= */

function updateReadyButton() {

    const ships =
        getPlacementShips();


    const ready =
        allShipsPlaced(
            ships
        );


    readyButton.disabled =
        !ready;


    readyButton.classList.toggle(
        "disabled-button",
        !ready
    );


    if (ready) {

        setStatus(
            t("allPlaced")
        );
    }
}


/* =========================================================
   ORIENTATION
========================================================= */

function updateOrientation() {

    horizontal =
        !horizontal;


    orientationText.textContent =
        horizontal
            ? "→"
            : "↓";


    clearPreview();
}


/* =========================================================
   START BATTLE
========================================================= */

function startBattle() {

    phase = "battle";

    activePlayer = 1;

    gameOver = false;

    waitingForAI = false;


    setupPanel.style.display =
        "none";


    fleetPanel.style.display =
        "block";


    if (
        mode === "ai"
    ) {

        boardsContainer.style.gridTemplateColumns =
            "repeat(2, minmax(0, 1fr))";

        enemyCard.style.display =
            "block";

        renderBattleBoards();

        setStatus(
            t("yourTurn")
        );

        turnText.textContent =
            t("yourTurn");

    } else {

        boardsContainer.style.gridTemplateColumns =
            "repeat(2, minmax(0, 1fr))";

        enemyCard.style.display =
            "block";

        renderBattleBoards();

        setStatus(
            `${t("player1")}: ${t("yourTurn")}`
        );

        turnText.textContent =
            t("player1");
    }


    updateBattleCounters();

    renderBattleFleet();
}


/* =========================================================
   RENDER BATTLE BOARDS
========================================================= */

function renderBattleBoards() {

    let ownBoard;
    let enemyBoard;
    let ownShips;
    let enemyShips;


    if (
        mode === "ai"
    ) {

        ownBoard =
            player1Board;

        enemyBoard =
            player2Board;

        ownShips =
            player1Ships;

        enemyShips =
            player2Ships;

    } else {

        ownBoard =
            activePlayer === 1
                ? player1Board
                : player2Board;

        enemyBoard =
            activePlayer === 1
                ? player2Board
                : player1Board;

        ownShips =
            activePlayer === 1
                ? player1Ships
                : player2Ships;

        enemyShips =
            activePlayer === 1
                ? player2Ships
                : player1Ships;
    }


    renderBoard(
        ownBoard,
        playerBoardElement,
        false,
        false
    );


    renderBoard(
        enemyBoard,
        enemyBoardElement,
        !gameOver,
        true
    );


    updateBoardTitles();

    updateCounters(
        ownShips,
        enemyShips
    );
}


/* =========================================================
   RENDER GENERIC BOARD
========================================================= */

function renderBoard(
    board,
    container,
    hideShips,
    attackable
) {

    container.innerHTML = "";


    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            const data =
                board[row][col];


            const cell =
                document.createElement("div");


            cell.className =
                "cell";


            if (
                data.shipId !== null &&
                !hideShips
            ) {

                cell.classList.add(
                    "ship"
                );
            }


            if (
                data.state === "hit"
            ) {

                cell.classList.add(
                    "hit"
                );
            }


            if (
                data.state === "miss"
            ) {

                cell.classList.add(
                    "miss"
                );
            }


            if (
                !attackable
            ) {

                cell.classList.add(
                    "disabled"
                );

            } else {

                cell.addEventListener(
                    "click",
                    () => {

                        playerAttack(
                            row,
                            col
                        );
                    }
                );
            }


            container.appendChild(
                cell
            );
        }
    }
}


/* =========================================================
   BOARD TITLES
========================================================= */

function updateBoardTitles() {

    if (
        mode === "ai"
    ) {

        leftBoardTitle.textContent =
            t("yourFleet");

        leftBoardSubtitle.textContent =
            t("player1");

        rightBoardTitle.textContent =
            t("enemyFleet");

        rightBoardSubtitle.textContent =
            t("computer");

    } else {

        if (
            activePlayer === 1
        ) {

            leftBoardTitle.textContent =
                t("player1");

            leftBoardSubtitle.textContent =
                t("yourFleet");

            rightBoardTitle.textContent =
                t("player2");

            rightBoardSubtitle.textContent =
                t("enemyFleet");

        } else {

            leftBoardTitle.textContent =
                t("player2");

            leftBoardSubtitle.textContent =
                t("yourFleet");

            rightBoardTitle.textContent =
                t("player1");

            rightBoardSubtitle.textContent =
                t("enemyFleet");
        }
    }
}


/* =========================================================
   PLAYER ATTACK
========================================================= */

function playerAttack(
    row,
    col
) {

    if (gameOver) {
        return;
    }


    if (
        mode === "ai" &&
        waitingForAI
    ) {

        return;
    }


    const enemyBoard =
        mode === "ai"
            ? player2Board
            : activePlayer === 1
                ? player2Board
                : player1Board;


    const enemyShips =
        mode === "ai"
            ? player2Ships
            : activePlayer === 1
                ? player2Ships
                : player1Ships;


    const cell =
        enemyBoard[row][col];


    if (
        cell.state !== "empty"
    ) {

        return;
    }


    moves++;

    movesValue.textContent =
        moves;


    if (
        cell.shipId !== null
    ) {

        cell.state =
            "hit";


        const ship =
            enemyShips[cell.shipId];


        ship.hits++;


        hits++;


        hitsValue.textContent =
            hits;


        if (
            ship.hits >= ship.size
        ) {

            ship.sunk = true;

            setStatus(
                `${ship.emoji} ${t("destroyed")}`
            );

        } else {

            setStatus(
                t("hit")
            );
        }


        renderBattleBoards();

        renderBattleFleet();


        if (
            allDestroyed(
                enemyShips
            )
        ) {

            finishGame(
                mode === "ai"
                    ? 1
                    : activePlayer
            );

            return;
        }


        /*
            Попадание = ещё один выстрел.
        */

        return;
    }


    /* MISS */

    cell.state =
        "miss";


    setStatus(
        t("miss")
    );


    renderBattleBoards();


    if (
        mode === "twoPlayers"
    ) {

        switchPlayer();

        return;
    }


    /* AI */

    waitingForAI =
        true;


    turnText.textContent =
        t("enemyTurn");


    setTimeout(
        aiTurn,
        650
    );
}


/* =========================================================
   SWITCH PLAYER
========================================================= */

function switchPlayer() {

    activePlayer =
        activePlayer === 1
            ? 2
            : 1;


    showPassScreen();
}


/* =========================================================
   PASS SCREEN
========================================================= */

function showPassScreen() {

    passTitle.textContent =
        t("passDevice");


    passText.textContent =
        `${activePlayer === 1
            ? t("player1")
            : t("player2")
        }: ${t("passText")}`;


    passScreen.classList.remove(
        "hidden"
    );
}


/* =========================================================
   CONTINUE
========================================================= */

continueButton.addEventListener(
    "click",
    () => {

        passScreen.classList.add(
            "hidden"
        );


        renderBattleBoards();

        renderBattleFleet();


        setStatus(
            `${
                activePlayer === 1
                    ? t("player1")
                    : t("player2")
            }: ${t("yourTurn")}`
        );


        turnText.textContent =
            activePlayer === 1
                ? t("player1")
                : t("player2");
    }
);


/* =========================================================
   AI TURN
========================================================= */

function aiTurn() {

    if (gameOver) {
        return;
    }


    const target =
        chooseAITarget();


    if (!target) {
        return;
    }


    const cell =
        player1Board[
            target.row
        ][
            target.col
        ];


    enemyHits++;


    enemyHitsValue.textContent =
        enemyHits;


    if (
        cell.shipId !== null
    ) {

        cell.state =
            "hit";


        const ship =
            player1Ships[
                cell.shipId
            ];


        ship.hits++;


        if (
            difficulty !== "easy"
        ) {

            addAITargets(
                target.row,
                target.col
            );
        }


        if (
            ship.hits >= ship.size
        ) {

            ship.sunk =
                true;

            aiTargets = [];

            aiHitTargets = [];


            setStatus(
                `${ship.emoji} ${t("destroyed")}`
            );

        } else {

            setStatus(
                t("aiHit")
            );
        }


        renderBattleBoards();

        renderBattleFleet();


        if (
            allDestroyed(
                player1Ships
            )
        ) {

            finishGame(
                2
            );

            return;
        }


        /*
            При попадании AI стреляет ещё.
        */

        setTimeout(
            aiTurn,
            650
        );


        return;
    }


    /* MISS */

    cell.state =
        "miss";


    setStatus(
        t("aiMiss")
    );


    renderBattleBoards();


    waitingForAI =
        false;


    turnText.textContent =
        t("yourTurn");
}


/* =========================================================
   CHOOSE AI TARGET
========================================================= */

function chooseAITarget() {

    if (
        difficulty === "easy"
    ) {

        return randomAITarget();
    }


    while (
        aiHitTargets.length > 0
    ) {

        const target =
            aiHitTargets.pop();


        if (
            isTargetAvailable(
                target
            )
        ) {

            return target;
        }
    }


    if (
        difficulty === "medium"
    ) {

        while (
            aiTargets.length > 0
        ) {

            const target =
                aiTargets.shift();


            if (
                isTargetAvailable(
                    target
                )
            ) {

                return target;
            }
        }


        return randomAITarget();
    }


    /*
        HARD
    */

    const hunt =
        hardHuntTarget();


    return (
        hunt ||
        randomAITarget()
    );
}


/* =========================================================
   RANDOM AI
========================================================= */

function randomAITarget() {

    const cells = [];


    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            if (
                player1Board[
                    row
                ][
                    col
                ].state === "empty"
            ) {

                cells.push({
                    row,
                    col
                });
            }
        }
    }


    if (
        cells.length === 0
    ) {

        return null;
    }


    return cells[
        Math.floor(
            Math.random() *
            cells.length
        )
    ];
}


/* =========================================================
   HARD HUNT
========================================================= */

function hardHuntTarget() {

    const cells = [];


    for (let row = 0; row < SIZE; row++) {

        for (let col = 0; col < SIZE; col++) {

            if (
                player1Board[
                    row
                ][
                    col
                ].state !== "empty"
            ) {

                continue;
            }


            if (
                (row + col) % 2 === 0
            ) {

                cells.push({
                    row,
                    col
                });
            }
        }
    }


    if (
        cells.length === 0
    ) {

        return null;
    }


    return cells[
        Math.floor(
            Math.random() *
            cells.length
        )
    ];
}


/* =========================================================
   ADD AI TARGETS
========================================================= */

function addAITargets(
    row,
    col
) {

    const directions = [

        {
            row: -1,
            col: 0
        },

        {
            row: 1,
            col: 0
        },

        {
            row: 0,
            col: -1
        },

        {
            row: 0,
            col: 1
        }

    ];


    directions.forEach(
        direction => {

            const target = {

                row:
                    row +
                    direction.row,

                col:
                    col +
                    direction.col
            };


            if (
                isTargetAvailable(
                    target
                )
            ) {

                aiTargets.push(
                    target
                );

                aiHitTargets.push(
                    target
                );
            }
        }
    );
}


/* =========================================================
   TARGET AVAILABLE
========================================================= */

function isTargetAvailable(
    target
) {

    if (!target) {
        return false;
    }


    if (
        target.row < 0 ||
        target.row >= SIZE ||
        target.col < 0 ||
        target.col >= SIZE
    ) {

        return false;
    }


    return (
        player1Board[
            target.row
        ][
            target.col
        ].state === "empty"
    );
}


/* =========================================================
   CHECK DESTROYED
========================================================= */

function allDestroyed(
    ships
) {

    return ships.every(
        ship => ship.sunk
    );
}


/* =========================================================
   FINISH GAME
========================================================= */

function finishGame(
    winner
) {

    gameOver = true;

    waitingForAI = false;


    if (
        mode === "ai"
    ) {

        if (
            winner === 1
        ) {

            winnerIcon.textContent =
                "🏆";

            winnerTitle.textContent =
                t("victory");

            winnerText.textContent =
                t("victoryText");

        } else {

            winnerIcon.textContent =
                "💀";

            winnerTitle.textContent =
                t("defeat");

            winnerText.textContent =
                t("defeatText");
        }

    } else {

        winnerIcon.textContent =
            "🏆";

        winnerTitle.textContent =
            `${
                winner === 1
                    ? t("player1")
                    : t("player2")
            } — ${t("victory")}`;

        winnerText.textContent =
            t("victoryText");
    }


    renderBattleBoards();

    renderBattleFleet();


    winScreen.classList.remove(
        "hidden"
    );
}


/* =========================================================
   BATTLE FLEET
========================================================= */

function renderBattleFleet() {

    let ships;


    if (
        mode === "ai"
    ) {

        ships =
            player1Ships;

        fleetTitle.textContent =
            t("yourFleet");

    } else {

        ships =
            activePlayer === 1
                ? player1Ships
                : player2Ships;

        fleetTitle.textContent =
            activePlayer === 1
                ? t("player1")
                : t("player2");
    }


    fleetList.innerHTML = "";


    ships.forEach(
        ship => {

            const element =
                document.createElement("div");


            element.className =
                "battle-ship";


            if (
                ship.sunk
            ) {

                element.classList.add(
                    "destroyed"
                );
            }


            element.innerHTML = `

                <span class="emoji">
                    ${ship.emoji}
                </span>

                <div>
                    <strong>
                        ${t(ship.name)}
                    </strong>

                    <small>
                        ${ship.size}
                    </small>
                </div>
            `;


            fleetList.appendChild(
                element
            );
        }
    );
}


/* =========================================================
   UPDATE COUNTERS
========================================================= */

function updateBattleCounters() {

    const ownShips =
        mode === "ai"
            ? player1Ships
            : activePlayer === 1
                ? player1Ships
                : player2Ships;


    const enemyShips =
        mode === "ai"
            ? player2Ships
            : activePlayer === 1
                ? player2Ships
                : player1Ships;


    updateCounters(
        ownShips,
        enemyShips
    );
}


function updateCounters(
    ownShips,
    enemyShips
) {

    const ownAlive =
        ownShips.filter(
            ship => !ship.sunk
        ).length;


    const enemyAlive =
        enemyShips.filter(
            ship => !ship.sunk
        ).length;


    leftFleetCounter.textContent =
        `${ownAlive} / ${TOTAL_SHIPS}`;


    rightFleetCounter.textContent =
        `${enemyAlive} / ${TOTAL_SHIPS}`;
}


/* =========================================================
   STATUS
========================================================= */

function setStatus(
    message
) {

    statusMessage.textContent =
        message;


    statusMessage.style.animation =
        "none";


    requestAnimationFrame(
        () => {

            statusMessage.style.animation =
                "statusAnimation 0.35s ease";
        }
    );
}


/* =========================================================
   LANGUAGE
========================================================= */

function applyLanguage() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(
            element => {

                element.textContent =
                    t(
                        element.dataset.i18n
                    );
            }
        );


    document.documentElement.lang =
        language;


    orientationText.textContent =
        horizontal
            ? "→"
            : "↓";


    if (
        phase === "placement"
    ) {

        renderPlacement();

        updateReadyButton();

    } else {

        renderBattleBoards();

        renderBattleFleet();
    }
}


/* =========================================================
   NEW GAME
========================================================= */

function newGame() {

    player1Board =
        createBoard();

    player2Board =
        createBoard();


    player1Ships =
        createShips();

    player2Ships =
        createShips();


    phase =
        "placement";


    placementPlayer =
        1;


    activePlayer =
        1;


    selectedShipId =
        null;


    horizontal =
        true;


    gameOver =
        false;


    waitingForAI =
        false;


    moves =
        0;

    hits =
        0;

    enemyHits =
        0;


    aiTargets = [];

    aiHitTargets = [];


    movesValue.textContent =
        "0";

    hitsValue.textContent =
        "0";

    enemyHitsValue.textContent =
        "0";


    setupPanel.style.display =
        "block";


    fleetPanel.style.display =
        "none";


    enemyCard.style.display =
        "none";


    boardsContainer.style.gridTemplateColumns =
        "1fr";


    leftBoardTitle.textContent =
        mode === "ai"
            ? t("yourFleet")
            : t("player1");


    leftBoardSubtitle.textContent =
        mode === "ai"
            ? t("player1")
            : t("player1");


    rightBoardTitle.textContent =
        t("enemyFleet");


    rightBoardSubtitle.textContent =
        t("computer");


    turnText.textContent =
        mode === "ai"
            ? t("placementTitle")
            : `${t("player1")}: ${t("placementTitle")}`;


    setStatus(
        t("placementDescription")
    );


    updateDifficultyVisibility();

    renderPlacement();

    updateReadyButton();
}


/* =========================================================
   READY
========================================================= */

readyButton.addEventListener(
    "click",
    () => {

        const ships =
            getPlacementShips();


        if (
            !allShipsPlaced(
                ships
            )
        ) {

            return;
        }


        if (
            mode === "ai"
        ) {

            /*
                AI получает случайную
                расстановку.
            */

            randomPlacement(
                player2Board,
                player2Ships
            );


            startBattle();

        } else {

            if (
                placementPlayer === 1
            ) {

                placementPlayer = 2;

                selectedShipId = null;

                clearBoard(
                    player2Board,
                    player2Ships
                );


                passTitle.textContent =
                    t("passDevice");


                passText.textContent =
                    `${t("player2")}: ${t("passText")}`;


                passScreen.classList.remove(
                    "hidden"
                );


                /*
                    После continue игрок 2
                    сможет поставить свои корабли.
                */
            } else {

                startBattle();
            }
        }
    }
);


/* =========================================================
   ROTATE
========================================================= */

rotateButton.addEventListener(
    "click",
    () => {

        updateOrientation();
    }
);


/* =========================================================
   RANDOM
========================================================= */

randomButton.addEventListener(
    "click",
    () => {

        randomPlacement(
            getPlacementBoard(),
            getPlacementShips()
        );
    }
);


/* =========================================================
   CLEAR
========================================================= */

clearButton.addEventListener(
    "click",
    () => {

        clearBoard(
            getPlacementBoard(),
            getPlacementShips()
        );


        renderPlacement();

        updateReadyButton();


        setStatus(
            t("placementDescription")
        );
    }
);


/* =========================================================
   MODE
========================================================= */

modeSelect.addEventListener(
    "change",
    () => {

        mode =
            modeSelect.value;

        newGame();
    }
);


/* =========================================================
   DIFFICULTY
========================================================= */

difficultySelect.addEventListener(
    "change",
    () => {

        difficulty =
            difficultySelect.value;

        newGame();
    }
);


/* =========================================================
   LANGUAGE
========================================================= */

languageSelect.addEventListener(
    "change",
    () => {

        language =
            languageSelect.value;

        applyLanguage();
    }
);


/* =========================================================
   NEW GAME BUTTON
========================================================= */

newGameButton.addEventListener(
    "click",
    newGame
);


/* =========================================================
   RESTART
========================================================= */

restartButton.addEventListener(
    "click",
    newGame
);


/* =========================================================
   PASS CONTINUE
========================================================= */

continueButton.addEventListener(
    "click",
    () => {

        passScreen.classList.add(
            "hidden"
        );


        if (
            phase === "placement"
        ) {

            selectedShipId = null;

            renderPlacement();

            updateReadyButton();


            turnText.textContent =
                `${t("player2")}: ${t("placementTitle")}`;


            setStatus(
                t("placementDescription")
            );

        } else {

            renderBattleBoards();

            renderBattleFleet();


            turnText.textContent =
                activePlayer === 1
                    ? t("player1")
                    : t("player2");


            setStatus(
                `${activePlayer === 1
                    ? t("player1")
                    : t("player2")
                }: ${t("yourTurn")}`
            );
        }
    }
);


/* =========================================================
   DIFFICULTY VISIBILITY
========================================================= */

function updateDifficultyVisibility() {

    difficultyCard.style.display =
        mode === "ai"
            ? "block"
            : "none";
}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key.toLowerCase() === "r" &&
            phase === "placement"
        ) {

            updateOrientation();
        }
    }
);


/* =========================================================
   START
========================================================= */

applyLanguage();

updateDifficultyVisibility();

newGame();function renderBoard(
    board,
    container,
    hideShips,
    attackable,
    ships = []
) {
    container.innerHTML = "";

    // Создаём клетки поля
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {

            const data = board[row][col];

            const cell = document.createElement("div");

            cell.className = "cell";

            if (
                data.shipId !== null &&
                !hideShips
            ) {
                cell.classList.add("ship");
            }

            if (data.state === "hit") {
                cell.classList.add("hit");
            }

            if (data.state === "miss") {
                cell.classList.add("miss");
            }

            if (!attackable) {
                cell.classList.add("disabled");
            } else {
                cell.addEventListener(
                    "click",
                    () => {
                        playerAttack(row, col);
                    }
                );
            }

            container.appendChild(cell);
        }
    }

    // ==========================================
    // ПОКАЗ УНИЧТОЖЕННЫХ КОРАБЛЕЙ
    // ==========================================

    ships.forEach(ship => {

        // Показываем только полностью уничтоженный корабль
        if (!ship.sunk || !ship.positions.length) {
            return;
        }

        const graphic = document.createElement("div");

        graphic.className = "sunk-ship-graphic";

        // Определяем ориентацию корабля
        const first = ship.positions[0];
        const second = ship.positions[1];

        const isHorizontal =
            ship.positions.length === 1 ||
            first.row === second.row;

        // Позиция корабля
        const startRow =
            Math.min(
                ...ship.positions.map(
                    position => position.row
                )
            );

        const startCol =
            Math.min(
                ...ship.positions.map(
                    position => position.col
                )
            );

        // Размер корабля
        if (isHorizontal) {

            graphic.style.left =
                `${startCol * 10}%`;

            graphic.style.top =
                `${startRow * 10}%`;

            graphic.style.width =
                `${ship.size * 10}%`;

            graphic.style.height =
                `10%`;

        } else {

            graphic.style.left =
                `${startCol * 10}%`;

            graphic.style.top =
                `${startRow * 10}%`;

            graphic.style.width =
                `10%`;

            graphic.style.height =
                `${ship.size * 10}%`;
        }

        // Рисунок корабля
        graphic.innerHTML = `
            <span class="sunk-ship-icon">
                ${ship.emoji}
            </span>
        `;

        // Для вертикального корабля поворачиваем рисунок
        if (!isHorizontal) {
            graphic.classList.add("vertical");
        }

        container.appendChild(graphic);
    });
}