const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const digButton = document.getElementById('digButton');
const quitButton = document.getElementById('quitButton');
const playerNameSpan = document.getElementById('playerName');
const depthSpan = document.getElementById('depth');
const leaderboardList = document.getElementById('leaderboardList');

let depth = 0;
let playerName = "Player";
let leaderboardData = {};

// Function to update the game canvas
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#222';
    ctx.font = '24px Arial';
    ctx.fillText(`Depth: ${depth}`, 20, 40);
}

// Function to update the leaderboard display
function updateLeaderboard() {
    leaderboardList.innerHTML = '';
    for (const player in leaderboardData) {
        const listItem = document.createElement('div');
        listItem.textContent = `${player}: ${leaderboardData[player]}`;
        leaderboardList.appendChild(listItem);
    }
}

// Event listeners for buttons
digButton.addEventListener('click', () => {
    depth++;
    depthSpan.textContent = depth;
    drawGame();
});

quitButton.addEventListener('click', () => {
    // Implement quitting logic here, e.g., disconnect from the server
});

// Example: Simulate leaderboard data
setInterval(() => {
    leaderboardData[playerName] = depth;
    updateLeaderboard();
}, 5000); // Update leaderboard every 5 seconds

// Start the game loop
drawGame();
