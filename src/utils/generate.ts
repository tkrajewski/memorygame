import getRandomInt from "./randomInt";
import shuffle from "./shuffle";

const generate = (modifier: number) => {
  const pow = modifier * modifier;
  const halfPow = pow / 2;
  const deck: number[] = [];
  
  while(deck.length < halfPow){
    const rand = getRandomInt(1, pow * 4);
    
    if (deck.indexOf(rand) === -1) deck.push(rand);
  } 

  return shuffle([...deck, ...deck]);
};

export default generate;