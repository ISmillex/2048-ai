# 2048-AI

https://github.com/ISmillex/2048-ai/assets/72645646/9ebc09ce-dd56-4dee-a270-5481be3b1430

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Road Map](#road-map)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Introduction
2048-AI is a 2D game built using Svelte Kit. The game involves merging tiles with the same numbers to create a tile with the number 2048. The aim of this project is to implement an AI that can proficiently play the game. The current version does not include the AI, but it features a beautiful and responsive design that works seamlessly on both mobile and desktop platforms. You can play the game online [here](https://archyn.com.tr/games/2048).

## Features
- Beautiful and responsive design
- Seamless gameplay experience on both mobile and desktop platforms
- Intuitive user interface for a smooth gaming experience

## Road Map
### Version 1.0.0
- Basic 2048 game functionality without AI
- Responsive design for both mobile and desktop

### Version 2.0.0 (Upcoming)
- Integration of AI to play the game proficiently
- Improved user interface and user experience
- Additional customization options for the game

## Installation
To run the game locally, follow these steps:

1. Clone the repository using the following command: `git clone https://github.com/ISmillex/2048-AI.git`
2. Navigate to the project directory. `cd 2048-ai`
3. Install the dependencies using npm. `npm install`
4. Run the development server: `npm run dev -- --host`
5. Open your web browser and go to the following address: `http://localhost:5173/`

## How It Works
2048-AI is built using Svelte Kit, providing an efficient and reactive web framework for creating interactive web applications. The game mechanics involve merging tiles with the same numbers by sliding them in different directions. The time complexity of the game largely depends on the number of moves made by the player, which can be optimized using an AI algorithm.

The space complexity is determined by the number of tiles on the game board, which increases as the game progresses. Implementing an AI for the game would optimize the gameplay by making strategic moves, effectively reducing the time and space complexity.

## Contributing
To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
