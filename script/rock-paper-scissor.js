let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
}
document.querySelector('.js-display-result').innerText = `Play your move`;
document.querySelector('.js-display-move').innerText = `You  vs  Comp`;
document.querySelector('.js-display-score').innerText = `Win : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}`;

playGame = (yourMove) => {
let randomNumber = Math.random();
let computerMove = '';

let result = '';

if(randomNumber >= 0 && randomNumber < 1/3 ){
  computerMove = 'rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3 ){
  computerMove = 'paper';
}
else if(randomNumber >= 2/3 && randomNumber < 1 ){
  computerMove = 'scissors';
}

if(yourMove === 'rock'){
  if(computerMove === 'rock'){
    result = 'Tie';
  }
  else if(computerMove === 'paper'){
    result = 'Computer Won';
  }
  else if(computerMove === 'scissors'){
    result = 'You Won';
  }
}
else if(yourMove === 'paper'){
  if(computerMove === 'rock'){
    result = 'You Won';
  }
  else if(computerMove === 'paper'){
    result = 'Tie';
  }
  else if(computerMove === 'scissors'){
    result = 'Computer Won';
  }
}
else if(yourMove === 'scissors'){
  if(computerMove === 'rock'){
    result = 'Computer Won';
  }
  else if(computerMove === 'paper'){
    result = 'You Won';
  }
  else if(computerMove === 'scissors'){
    result = 'Tie';
  }
}

if(result === 'You Won'){
  score.win += 1;
}
else if(result === 'Computer Won'){
  score.lose += 1;
}
else if(result === 'Tie'){
  score.tie += 1;
}

document.querySelector('.js-display-result').innerText = `${result}`;

document.querySelector('.js-display-move').innerHTML = `You : <img class ="inside-js-logo" src="./assets/${yourMove}.png" alt=""> vs <img src="./assets/${computerMove}.png" class ="inside-js-logo" alt=""> Comp`;

document.querySelector('.js-display-score').innerText = `Win : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}`;

let scoreJsonObj = JSON.stringify(score);

localStorage.setItem('score',scoreJsonObj);
}

reset = () => {
score.win = 0;
score.lose = 0;
score.tie = 0;
document.querySelector('.js-display-result').innerText = `Play your move`;

document.querySelector('.js-display-move').innerText = `You  vs  Comp`; 
document.querySelector('.js-display-score').innerText = `Win : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}`;
localStorage.removeItem('score');
}
