# Dice Game

A simple two-player dice game implemented in JavaScript.

## Overview

This project is a basic web application that simulates a turn-based dice game between two players. Each player takes turns rolling a six-sided die, with the goal of reaching a specified winning score to win the match.

## Features

- **Roll the Dice:** Players can roll the dice to accumulate points.
- **Switch Player:** Turns automatically switch when a player rolls a 1.
- **Winning Condition:** The first player to reach the winning score wins the match.
- **Restart the Match:** Ability to restart the match after a player wins.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/zainkhan25/Roll-Dice-Game.git
   ```

2. **Include the JavaScript File:**
   Include the JavaScript file in your HTML document.
   ```html
   <script src="app.js"></script>
   ```

3. **Run the Application:**
   Open the HTML file in a web browser.

4. **Customize Winning Score:**
   Adjust the winning score in the `switchPlayer()` function in your JavaScript file.
   ```javascript
   if (currentPlayerHighestScore.innerHTML >= 50) {
       // Adjust the winning score as needed
       // ...
   }
   ```

## How to Play

1. Click the "Start Game" button to initiate the game.
2. Players take turns rolling the dice by clicking the "Roll Dice" button.
3. Accumulate points with each roll.
4. If a player rolls a 1, their score resets, and the turn switches.
5. The first player to reach the specified winning score wins the match.

## Screenshots


![Welcome-Page](https://github.com/ZAINKHAN25/Roll-Dice-Game/assets/121414309/2a55dbab-e94d-4478-911a-a393d3556e7c)

![Main Game](https://github.com/ZAINKHAN25/Roll-Dice-Game/assets/121414309/8fa4f9c4-b2d0-41e8-81c7-51d5aea22c22)

![Result](https://github.com/ZAINKHAN25/Roll-Dice-Game/assets/121414309/0757205f-8358-49c6-bdcf-7f968d0f8bfb)



## Contributing

Feel free to contribute to the development of this dice game by opening issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
