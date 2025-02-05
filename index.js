document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.querySelector('[data-testid="colorBox"]');
    const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
    const gameStatus = document.querySelector('[data-testid="gameStatus"]');
    const scoreDisplay = document.querySelector('[data-testid="score"]');
    const newGameButton = document.querySelector('[data-testid="newGameButton"]');

    let score = 0;
    let targetColor = "";
    const colors = ["white", "brown", "pink", "yellow", "burlywood", "orange"];

    function generateGame() {
        
        targetColor = colors[Math.floor(Math.random() * colors.length)];
        colorBox.style.backgroundColor = targetColor;

        
        const shuffledColors = [...colors].sort(() => Math.random() - 0.5);

        colorOptions.forEach((option, index) => {
            option.style.backgroundColor = shuffledColors[index];
            option.addEventListener("click", () => checkGuess(shuffledColors[index]));
        });

        
        gameStatus.textContent = "Guess the correct color!";
        gameStatus.style.color = "black";
    }

    function checkGuess(selectedColor) {
        if (selectedColor === targetColor) {
            gameStatus.textContent = "Correct! 🎉";
            gameStatus.style.color = "green";
            score++;
            scoreDisplay.textContent = `SCORE: ${score}`;
        } else {
            gameStatus.textContent = "Wrong! Try again. ❌";
            gameStatus.style.color = "red";
        }
    }

    newGameButton.addEventListener("click", generateGame);

    generateGame();
});
