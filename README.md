# Tile Slide Puzzle Game

## Description
This project is a simplified version of the classic "Tile Slide" puzzle game. The player's objective is to rearrange tiles in a 3x3 grid to match a final configuration, starting from a randomized layout.

## Features
- **Game Logic:** Implements the basic logic for a 3x3 grid, including an empty space that allows for tile movement. Ensures the puzzle starts in a solvable state.
- **Tile Movement:** Allows the player to move tiles adjacent to the empty space into that space, using arrow keys for keyboard input or simple button clicks for GUI interaction.
- **Win Condition:** Checks if the player has achieved the correct tile configuration and displays a simple message if they win.
- **Reset/Game Restart:** Includes a way to restart the game or reshuffle the tiles.

## Technologies Used
- **Next.js:** The project is built using Next.js, a React framework.
- **React:** Utilizes React for component-based UI development.
- **TypeScript:** Written in TypeScript for improved type safety and code readability.
- **Tailwind CSS:** Uses Tailwind CSS for styling, providing a utility-first approach to CSS.

## How to Run
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm run dev` or `yarn dev`.
5. Open your browser and navigate to `http://localhost:3000` to play the game.

## Approach Explanation
- The game board is represented as a 1-dimensional array, where each element corresponds to a tile in the grid. The empty space is represented by `null`.
- Tile movement is handled by swapping the positions of the empty space and the adjacent tile based on the player's input.
- The game checks for a win condition by comparing the current game board with the target configuration.
- A reset function is implemented to shuffle the tiles into a solvable state before starting the game.

## Author
Vasyl Dzinevskyi

## Acknowledgements
This project is a coding challenge submission for <strong>`BehaviorAgent.com`</strong>. Special thanks to <strong>`John Barrera`</strong> for providing the challenge.
