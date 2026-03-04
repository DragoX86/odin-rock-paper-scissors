# [Odin Project Assignment #3 - Rock Paper Scissors:](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)
This assignment requires me to create a rock, paper, scissors game in JavaScript. The game will be played through the browser's developer console, so there is no need for me to style or create web GUI for the game.

## Challenges I Encountered and How I Solved Them:

### Challenge 1:
Trying to come up with a solution where the odds of which the computer decides to throw rock, paper, scissors is more even.

My current implementation is:

- if the randomNumber is less than 10 return rock,
- if it is greater than 10 but less than 100 return paper,
- else return scissor

But this has an issue where paper is the most common outcome while scissor is uncommon and rock is rare.

#### Solution:
My solution was to adjust the if statments paramenters from
- randomNumber is less than 10, to is less than 33 for rock
- randomNumber is greater than 10 but less than 100, to greater than 33 but less than 67 for paper.