import React, { useState, useEffect } from 'react'
import PlayCard from './PlayCard.jsx'

import './App.css'

let deck = []

const suits = ['hearts', 'diamonds', 'spades', 'clubs']
const values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']


function App() {

  const [play_this_card, set_play_this_card] = useState({suit: 'Hello', val: '5'})
 

function create_a_deck(suits, values) {
  suits.map( (suit) => {
    values.map( (val) => {
      deck.push({ suit: suit, val: val})   
    })
  })
  return deck
} 

function shuffleDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
 

  // When site is first loaded, start game immediately
  // Later, we'll probably change this to a START button
  useEffect(() => {
    // Establish a deck of shuffled cards
    let new_deck = create_a_deck(suits, values)
    new_deck = shuffleDeck(new_deck)
  
    // Deal the first card?
    set_play_this_card(play_this_card =>  new_deck.shift(new_deck))
  
    // Draw the game?

  }, []);

 
  return (
   <>
    <h1>Stack21 Game</h1> 
          {/* <Stack deck={new_deck} />  */}
          <PlayCard suit={play_this_card.suit} value={play_this_card.val} />

          {/* <PassStack />

          {[..Array(5).keys].map((row_num, i) => (
            <Line row={row_num} />
          ))}
          <Score />  */}

    </>
  )
}

export default App
