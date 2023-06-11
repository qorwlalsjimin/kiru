(function () {
  'use strict';
  var options = ['far-left', 'left', 'center', 'right', 'far-right'];
  var cards = document.querySelectorAll('.carousel-card');
  var prevButton = document.querySelector('.prev-button');
  var nextButton = document.querySelector('.next-button');
  addCardListeners();
  
  prevButton.addEventListener('click', function () {
    moveCards('prev');
  });
  
  nextButton.addEventListener('click', function () {
    moveCards('next');
  });
  
  function addCardListeners () {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      card.addEventListener('click', cardEventListener);
    }
  }
  
  function cardEventListener (e) {
    var parent = getParents(e.target, '.carousel-card')[0];
    var parentIndex = options.indexOf(parent.id);
    
    cards.forEach(function(card) {
      var index = options.indexOf(card.id);
      if (parentIndex > 2) {
        var previousIndex = index - 1 < 0 ? cards.length - 1 : index - 1;
        card.id = options[previousIndex];
      } else if (parentIndex < 2) {
        var nextIndex = index + 1 > cards.length - 1 ? 0 : index + 1;
        card.id = options[nextIndex];
      }
    });
  }
  
  function moveCards (direction) {
    var firstCard = cards[0];
    var lastCard = cards[cards.length - 1];
    var newFirstCard;
    var newLastCard;
    
    if (direction === 'prev') {
      newFirstCard = lastCard;
      newLastCard = firstCard;
      cards.forEach(function(card) {
        var index = options.indexOf(card.id);
        var newIndex = index - 1 < 0 ? cards.length - 1 : index - 1;
        card.id = options[newIndex];
      });
    } else if (direction === 'next') {
      newFirstCard = cards[1];
      newLastCard = firstCard;
      cards.forEach(function(card) {
        var index = options.indexOf(card.id);
        var newIndex = index + 1 > cards.length - 1 ? 0 : index + 1;
        card.id = options[newIndex];
      });
    }
    
    // Update the DOM order of the cards
    newFirstCard.parentNode.insertBefore(newFirstCard, firstCard);
    newLastCard.parentNode.insertBefore(newLastCard, firstCard);
  }
  
  function getParents(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Setup parents array
    var parents = [];

    // Get matching parent elements
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

      // Add matching parents to array
      if ( selector ) {
        if ( elem.matches( selector ) ) {
          parents.push( elem );
        }
      } else {
        parents.push( elem );
      }
    }

    return parents;
  };
})();
