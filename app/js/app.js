var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score__1').textContent = '0';
document.getElementById('score__2').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('current-2').textContent = '0';


document.querySelector('.btn__roll').addEventListener('click', function(){
  
  var dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice); 
  
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'assets/images/dice-' + dice + '.png';

  if(dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  
  } else {
    nextPlayer();
  }
  
});

document.querySelector('.btn__hold').addEventListener('click', function(){
  scores[activePlayer-1] += roundScore;
  
  document.querySelector('#score__' + activePlayer).textContent = scores[activePlayer-1];
  
  if(scores[activePlayer-1] >= 20){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
    
  } else {
    nextPlayer();
  }
  
  
});

function nextPlayer(){
  activePlayer === 1 ? activePlayer = 2: activePlayer = 1;
  roundScore = 0;
    
  document.getElementById('current-1').textContent = '0';
  document.getElementById('current-2').textContent = '0';

  document.querySelector('.player-1-panel').classList.toggle('player--active');
  document.querySelector('.player-2-panel').classList.toggle('player--active');
    
  document.querySelector('.dice').style.display = 'none';
}