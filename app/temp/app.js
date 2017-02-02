/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var scores, roundScore, activePlayer, gamePlaying;

	init();

	document.querySelector('.btn__roll').addEventListener('click', function () {

	  if (gamePlaying) {
	    var dice1 = Math.floor(Math.random() * 6) + 1;
	    var dice2 = Math.floor(Math.random() * 6) + 1;
	    console.log(dice1, dice2);

	    //var diceDOM = document.querySelector('.dice');
	    document.getElementById('dice-1').style.display = 'inline';
	    document.getElementById('dice-2').style.display = 'inline';
	    //diceDOM.style.display = 'block';
	    //diceDOM.src = 'assets/images/dice-' + dice + '.png';
	    document.getElementById('dice-1').src = 'assets/images/dice-' + dice1 + '.png';
	    document.getElementById('dice-2').src = 'assets/images/dice-' + dice2 + '.png';

	    if (dice1 !== 1 && dice2 !== 1) {
	      roundScore += dice1 + dice2;
	      document.querySelector('#current-' + activePlayer).textContent = roundScore;
	    } else {
	      nextPlayer();
	    }
	  }
	});

	document.querySelector('.btn__hold').addEventListener('click', function () {
	  if (gamePlaying) {

	    scores[activePlayer - 1] += roundScore;

	    document.querySelector('#score__' + activePlayer).textContent = scores[activePlayer - 1];

	    if (scores[activePlayer - 1] >= 100) {
	      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
	      document.getElementById('dice-1').style.display = 'none';
	      document.getElementById('dice-2').style.display = 'none';
	      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	      gamePlaying = false;
	    } else {
	      nextPlayer();
	    }
	  }
	});

	function nextPlayer() {
	  activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
	  roundScore = 0;

	  document.getElementById('current-1').textContent = '0';
	  document.getElementById('current-2').textContent = '0';

	  document.querySelector('.player-1-panel').classList.toggle('player--active');
	  document.querySelector('.player-2-panel').classList.toggle('player--active');

	  document.getElementById('dice-1').style.display = 'none';
	  document.getElementById('dice-2').style.display = 'none';
	}

	document.querySelector('.btn__new').addEventListener('click', init);

	function init() {
	  scores = [0, 0];
	  roundScore = 0;
	  activePlayer = 1;
	  gamePlaying = true;

	  document.getElementById('dice-1').style.display = 'none';
	  document.getElementById('dice-2').style.display = 'none';

	  document.getElementById('score__1').textContent = '0';
	  document.getElementById('score__2').textContent = '0';
	  document.getElementById('current-1').textContent = '0';
	  document.getElementById('current-2').textContent = '0';

	  document.getElementById('name-1').textContent = 'Player 1';
	  document.getElementById('name-2').textContent = 'Player 2';

	  document.querySelector('.player-1-panel').classList.remove('winner');
	  document.querySelector('.player-2-panel').classList.remove('winner');
	  document.querySelector('.player-1-panel').classList.remove('active');
	  document.querySelector('.player-2-panel').classList.remove('active');
	  document.querySelector('.player-1-panel').classList.add('active');
	}

/***/ }
/******/ ]);